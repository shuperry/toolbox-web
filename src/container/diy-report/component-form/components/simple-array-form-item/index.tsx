import { FC } from 'react'
import { Input, InputNumber, Space, Tooltip, message, Popconfirm } from 'antd'
import {
  QuestionCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { isNumber, isUndefined, isFunction, get } from 'lodash-es'
import { useDispatch, useSelector } from 'umi'

import type { FormJsonSchemaType } from '@/container/diy-report/types'

import styles from './index.less'

// 字符串数组及数字数组输入组件.
const SimpleArrayInputFormItem: FC<{
  fieldSchema: FormJsonSchemaType
  id: string
  type: string
}> = ({ fieldSchema, id, type }) => {
  const dispatch = useDispatch()

  const currFieldVal: any[] = useSelector((state) => {
    if (isFunction(fieldSchema.getDefaultValue)) {
      return fieldSchema.getDefaultValue(state['diyReport'].currFormVal)
    }

    return get(state['diyReport'].currFormVal, fieldSchema.keyPath)
  })

  const defVal = fieldSchema.dataType === 'string[]' ? '' : fieldSchema.dataType === 'number[]' ? 0 : null

  const errorMsgs: { [key: string]: string } = useSelector((state) => state['diyReport'].errorMsgsForArrField)

  const _setErrorMsg = ({ idx, clean }: { idx: number; clean: boolean }) => {
    dispatch({
      type: 'diyReport/setErrorMsgsForArrField',
      payload: {
        idx,
        msg: clean ? '' : fieldSchema.errorMsg || `请填写正确的${fieldSchema.label}`,
      },
    })
  }

  const _validate = ({ idx, val }: { idx: number; val: string | number }): boolean => {
    let flag = true

    if (fieldSchema.dataType === 'string[]') {
      if (fieldSchema.required && val === '') {
        flag = false
        _setErrorMsg({ idx, clean: false })
      } else {
        _setErrorMsg({ idx, clean: true })
      }
    } else if (fieldSchema.dataType === 'number[]') {
      if (fieldSchema.required && !isNumber(val)) {
        flag = false
        _setErrorMsg({ idx, clean: false })
      } else {
        _setErrorMsg({ idx, clean: true })
      }
    }

    return flag
  }

  const handleInputChange = ({ idx, val }: { idx: number; val: string | number }) => {
    const flag = _validate({ idx, val })

    if (isFunction(fieldSchema.setValueInterceptor)) {
      fieldSchema.setValueInterceptor(val, 'currFormVal', idx)

      if (flag) {
        fieldSchema.setValueInterceptor(val, 'components', idx)
      }
    } else {
      dispatch({
        type: 'diyReport/changeCurrFormValByFieldPath',
        payload: {
          fieldPath: `${fieldSchema.keyPath}[${idx}]`,
          val,
        },
      })

      if (flag && ['string[]', 'number[]'].includes(fieldSchema.dataType)) {
        dispatch({
          type: 'diyReport/changeComponentDataByFieldPath',
          payload: {
            fieldPath: `${fieldSchema.keyPath}[${idx}]`,
            val,
          },
        })
      }
    }
  }

  const addItem = () => {
    if (isFunction(fieldSchema.setValueInterceptor)) {
      fieldSchema.setValueInterceptor(null, 'currFormVal', currFieldVal.length)

      fieldSchema.setValueInterceptor(null, 'components', currFieldVal.length)
    } else {
      dispatch({
        type: 'diyReport/addArrItemForArrField',
        payload: {
          fieldPath: fieldSchema.keyPath,
          val: defVal,
        },
      })
    }
  }

  const removeItem = (idx: number) => {
    if (isFunction(fieldSchema.removeValueInterceptor)) {
      fieldSchema.removeValueInterceptor(currFieldVal.length - 1)
    } else {
      dispatch({
        type: 'diyReport/removeArrItemForArrField',
        payload: {
          fieldPath: fieldSchema.keyPath,
          idx,
        },
      })
    }
  }

  const valueLen: { [key: string]: number } = {}
  if (!isUndefined(fieldSchema.maxLength)) valueLen.maxLength = fieldSchema.maxLength

  console.log('into simple array form item with currFieldVal =', currFieldVal)

  return (
    <div className={styles['group-input-container']}>
      <Space>
        <span>
          <span className={styles.title}>{fieldSchema.label}</span>

          {fieldSchema.tip && (
            <Tooltip title={fieldSchema.tip}>
              <QuestionCircleOutlined className={styles['tip']} />
            </Tooltip>
          )}
        </span>

        {fieldSchema.allowAdd &&
          (isUndefined(fieldSchema.maxSize) ||
            (isNumber(fieldSchema.maxSize) && currFieldVal.length < fieldSchema.maxSize)) && (
            <PlusCircleOutlined className={styles['add-btn']} onClick={addItem} />
          )}
      </Space>

      <div className={styles['input-container']}>
        {currFieldVal.map((d, _idx) => {
          if (fieldSchema.dataType === 'string[]') {
            if (fieldSchema.inputType === 'input') {
              return (
                <div key={`${id}_${type}-${fieldSchema.keyPath}-ipt-${_idx}`} className={styles['input-item']}>
                  <Input
                    key={`${id}_${type}-${fieldSchema.keyPath}-ipt-${_idx}`}
                    className={styles['string-input']}
                    value={d}
                    {...valueLen}
                    onChange={(e) => handleInputChange({ idx: _idx, val: e.target.value })}
                  />

                  {fieldSchema.allowRemove &&
                    currFieldVal.length > (fieldSchema.minSize || (fieldSchema.required ? 1 : 0)) && (
                      <Popconfirm title="确认删除该参数吗？" onConfirm={() => removeItem(_idx)}>
                        <MinusCircleOutlined className={styles['del-btn-icon']} />
                      </Popconfirm>
                    )}

                  {errorMsgs[_idx] && (
                    <Tooltip title={errorMsgs[_idx]}>
                      <ExclamationCircleOutlined className={styles['err-tip']} />
                    </Tooltip>
                  )}
                </div>
              )
            }
            return (
              <div key={`${id}_${type}-${fieldSchema.keyPath}-ipt-${_idx}`} className={styles['input-item']}>
                <Input.TextArea
                  className={styles['width']}
                  allowClear
                  showCount
                  autoSize={{ minRows: 5, maxRows: 8 }}
                  value={d}
                  {...valueLen}
                  onPressEnter={() => {
                    if (!fieldSchema.allowLineBreak) {
                      message.warning('此参数不支持换行')
                    }
                  }}
                  onChange={(e) => {
                    if (!fieldSchema.allowLineBreak) {
                      e.target.value = e.target.value.replace(/[\r\n|\n]/g, '')
                    }

                    handleInputChange({
                      idx: _idx,
                      val: fieldSchema.allowLineBreak ? e.target.value : e.target.value.replace(/[\r\n|\n]/g, ''),
                    })
                  }}
                />

                {fieldSchema.allowRemove &&
                  currFieldVal.length > (fieldSchema.minSize || (fieldSchema.required ? 1 : 0)) && (
                    <Popconfirm title="确认删除该参数吗？" onConfirm={() => removeItem(_idx)}>
                      <MinusCircleOutlined className={styles['del-btn-icon']} />
                    </Popconfirm>
                  )}

                {errorMsgs[_idx] && (
                  <Tooltip title={errorMsgs[_idx]}>
                    <ExclamationCircleOutlined className={styles['err-tip']} />
                  </Tooltip>
                )}
              </div>
            )
          }

          return (
            <div key={`${id}_${type}-${fieldSchema.keyPath}-ipt-${_idx}`} className={styles['input-item']}>
              <InputNumber
                value={d}
                min={fieldSchema.min}
                max={fieldSchema.max}
                onChange={(val) => handleInputChange({ idx: _idx, val })}
              />

              {fieldSchema.allowRemove &&
                currFieldVal.length > (fieldSchema.minSize || (fieldSchema.required ? 1 : 0)) && (
                  <Popconfirm title="确认删除该参数吗？" onConfirm={() => removeItem(_idx)}>
                    <MinusCircleOutlined className={styles['del-btn-icon']} />
                  </Popconfirm>
                )}

              {errorMsgs[_idx] && (
                <Tooltip title={errorMsgs[_idx]}>
                  <ExclamationCircleOutlined className={styles['err-tip']} />
                </Tooltip>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SimpleArrayInputFormItem
