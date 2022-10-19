import { FC, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'umi'
import { Form, Input, InputNumber, Radio, Select, message, Alert, Switch } from 'antd'
import { get, isEmpty, isString, isNaN, isFunction, isUndefined, toString, toNumber, isNull } from 'lodash-es'

import * as SchemasConf from '@/config/diy-report/form-schemas'
import ComponentConf from '@/config/diy-report/component-conf'

import type { FormJsonSchemaType } from '../types'

import SimpleArrayInputFormItem from './components/simple-array-form-item'

type PropType = {
  id: string // 组件唯一 id.
  name: string
  type: string // 组件类型.
}

// 判断是否无效数据.
const isBlank = (val?: string | number): boolean => {
  if (isUndefined(val) || isNull(val)) {
    return true
  }

  if (isString(val)) {
    return isEmpty(val)
  }

  return isNaN(toNumber(val))
}

const ComponentForm: FC<PropType> = ({ id, type }) => {
  const [form] = Form.useForm()

  const dispatch = useDispatch()
  const currFormVal: any = useSelector((state) => state['diyReport'].currFormVal)

  useEffect(() => {
    form.setFieldsValue(currFormVal)
  }, [currFormVal])

  // 组件表单格式配置.
  const schema: FormJsonSchemaType[] = SchemasConf.schema[type]

  const handleFormChange = (fieldSchema: FormJsonSchemaType, val: any) => {
    if (!fieldSchema.required || (fieldSchema.required && !isBlank(val))) {
      if (isFunction(fieldSchema.setValueInterceptor)) {
        fieldSchema.setValueInterceptor(val, 'currFormVal')
        fieldSchema.setValueInterceptor(val, 'components')
      } else {
        dispatch({
          type: 'diyReport/changeCurrFormValByFieldPath',
          payload: {
            fieldPath: fieldSchema.keyPath,
            val,
          },
        })
        dispatch({
          type: 'diyReport/changeComponentDataByFieldPath',
          payload: {
            fieldPath: fieldSchema.keyPath,
            val,
          },
        })
      }
    }
  }

  return (
    <Form
      form={form}
      name={`${type}-form`}
      autoComplete="off"
      layout={ComponentConf.verticalFormTypes.includes(type) ? 'vertical' : 'horizontal'}
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
    >
      {(!schema || !Array.isArray(schema) || schema.length === 0) && (
        <Alert
          message="该组件暂不支持修改参数"
          description="若急需使用该组件，请告知研发人员，我们将尽快安排适配。"
          type="warning"
          showIcon
          closable
        />
      )}
      {id &&
        Array.isArray(schema) &&
        schema.length > 0 &&
        schema.map((item, _idx) => {
          // build validate rules.
          const rules: Array<{ [key: string]: any }> = []
          if (item.required) rules.push({ required: true, message: item.requiredMsg || `请填写${item.label}` })
          if (item.type) rules.push({ type: item.type, message: item.errorMsg || `请填写正确的${item.label}` })
          if (isFunction(item.validator)) rules.push({ validator: item.validator })

          const formItemVal = get(currFormVal, item.keyPath)
          const defVal = isBlank(formItemVal)
            ? isFunction(item.getDefaultValue)
              ? item.getDefaultValue(currFormVal)
              : item.defaultValue
            : formItemVal

          if (['string[]', 'number[]'].includes(item.dataType)) {
            return (
              <SimpleArrayInputFormItem
                key={`${id}_${type}-${item.keyPath}-ipt`}
                id={id}
                type={type}
                fieldSchema={item}
              />
            )
          } else if (item.inputType === 'select') {
            return (
              <Form.Item
                key={`${id}_${type}-${item.keyPath}-ipt`}
                label={item.label}
                name={item.keyPath}
                tooltip={item.tip}
                rules={rules}
                initialValue={defVal}
                style={{ marginBottom: 0 }}
              >
                {item.inputType === 'select' && (
                  <Select options={item.options} onChange={(val) => handleFormChange(item, val)} />
                )}
              </Form.Item>
            )
          } else if (item.inputType === 'radio') {
            return (
              <Form.Item
                key={`${id}_${type}-${item.keyPath}-ipt`}
                label={item.label}
                name={item.keyPath}
                tooltip={item.tip}
                rules={rules}
                initialValue={defVal}
                style={{ marginBottom: 0 }}
              >
                {item.inputType === 'radio' && (
                  <Radio.Group options={item.options} onChange={(e) => handleFormChange(item, e.target.value)} />
                )}
              </Form.Item>
            )
          } else if (item.dataType === 'string') {
            const valueLen: { [key: string]: number } = {}
            if (!isUndefined(item.maxLength)) valueLen.maxLength = item.maxLength

            if (item.inputType === 'input') {
              return (
                <Form.Item
                  key={`${id}_${type}-${item.keyPath}-ipt`}
                  label={item.label}
                  name={item.keyPath}
                  tooltip={item.tip}
                  rules={rules}
                  initialValue={defVal}
                >
                  <Input {...valueLen} onChange={(e) => handleFormChange(item, toString(e.target.value))} />
                </Form.Item>
              )
            }
            return (
              <Form.Item
                key={`${id}_${type}-${item.keyPath}-ipt`}
                label={item.label}
                name={item.keyPath}
                tooltip={item.tip}
                rules={rules}
                initialValue={defVal}
              >
                <Input.TextArea
                  allowClear
                  showCount
                  autoSize={{ minRows: 5, maxRows: 8 }}
                  {...valueLen}
                  onPressEnter={() => {
                    if (!item.allowLineBreak) {
                      message.warning('此参数不支持换行')
                    }
                  }}
                  onChange={(e) => {
                    form.setFieldsValue({
                      [item.keyPath]: item.allowLineBreak ? e.target.value : e.target.value.replace(/[\r\n|\n]/g, ''),
                    })
                    handleFormChange(
                      item,
                      item.allowLineBreak ? e.target.value : e.target.value.replace(/[\r\n|\n]/g, ''),
                    )
                  }}
                />
              </Form.Item>
            )
          } else if (item.dataType === 'number') {
            const valueRange: { [key: string]: number } = {}
            if (!isUndefined(item.min)) valueRange.min = item.min
            if (!isUndefined(item.max)) valueRange.max = item.max

            return (
              <Form.Item
                key={`${id}_${type}-${item.keyPath}-ipt`}
                label={item.label}
                name={item.keyPath}
                tooltip={item.tip}
                rules={rules}
                initialValue={defVal}
              >
                <InputNumber {...valueRange} onChange={(val) => handleFormChange(item, val)} />
              </Form.Item>
            )
          } else if (item.dataType === 'boolean') {
            return (
              <Form.Item
                key={`${id}_${type}-${item.keyPath}-ipt`}
                label={item.label}
                name={item.keyPath}
                tooltip={item.tip}
                valuePropName="checked"
                initialValue={!!defVal}
                style={{ marginBottom: 0 }}
              >
                <Switch onChange={(val) => handleFormChange(item, val)} />
              </Form.Item>
            )
          } else if (item.dataType === 'percent') {
            const valueRange: { [key: string]: number } = {}
            if (!isUndefined(item.min)) valueRange.min = item.min
            if (!isUndefined(item.max)) valueRange.max = item.max

            return (
              <Form.Item
                key={`${id}_${type}-${item.keyPath}-ipt`}
                label={item.label}
                name={item.keyPath}
                tooltip={item.tip}
                rules={rules}
                initialValue={defVal}
              >
                <InputNumber
                  max={100}
                  formatter={(value) => {
                    return toString(value).indexOf('%') === toString(value).length - 1 ? `${value}` : `${value}%`
                  }}
                  // @ts-ignore
                  parser={(value) => {
                    if (value) {
                      return value.replace('%', '')
                    }
                  }}
                  onChange={(val) => handleFormChange(item, `${val}%`)}
                />
              </Form.Item>
            )
          }

          return <Fragment key={`${id}_${type}-${item.keyPath}-ipt`}>other type</Fragment>
        })}
    </Form>
  )
}

export default ComponentForm
