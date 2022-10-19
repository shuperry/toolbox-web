import { FC, useState, useEffect } from 'react'
import { DiyReportState, useDispatch, useSelector } from 'umi'
import { Button, Empty, message, Alert } from 'antd'
import { v1 as uuidv1 } from 'uuid'
import { PlusOutlined, CopyOutlined, EyeOutlined, DeliveredProcedureOutlined } from '@ant-design/icons'
import Sortable, { SortableEvent } from 'sortablejs'
import { isUndefined, toNumber } from 'lodash-es'
import { useLocalStorageState } from 'ahooks'

import Title from '@/components/title'

import CopyJsonModal from '@/container/diy-report/cp-json-modal'
import RestoreJsonModal from '@/container/diy-report/restore-json-modal'
import AddCompModal from '@/container/diy-report/add-comp-modal'
import Component from '@/container/diy-report/component'
import ComponentForm from '@/container/diy-report/component-form'
import { defaultData as SchemasConfData } from '@/config/diy-report/form-schemas'
import ComponentConf from '@/config/diy-report/component-conf'

import { openNewWindow } from '@/utils'

import type { ReportComponentType, ComponentPickerItemType } from '@/container/diy-report/types'

import styles from './index.less'

interface PageProps {
  state: DiyReportState
}

const DiyReport: FC<PageProps> = () => {
  const dispatch = useDispatch()
  const [alertClosed, setAlertClosed] = useLocalStorageState('diyReportAlertClosed', { defaultValue: '0' })

  const components: ReportComponentType[] = useSelector((state) => state['diyReport'].components)
  const activeComponentId: string = useSelector((state) => state['diyReport'].activeComponentId)
  const activeComponentIdx: number = useSelector((state) => state['diyReport'].activeComponentIdx)
  const activeComponent: ReportComponentType = useSelector(
    (state) => state['diyReport'].components[state['diyReport'].activeComponentIdx],
  )
  const reportVal: any = useSelector((state) =>
    state['diyReport'].components.map((item: ReportComponentType) => item.data),
  )

  const [addCompModalVisible, setAddCompModalVisible] = useState(false)
  const [restoreJsonModalVisible, setRestoreJsonModalVisible] = useState(false)
  const [copyJsonModalVisible, setCopyJsonModalVisible] = useState(false)

  // 拖动排序回调函数.
  const onSortEnd = (oldIndex?: number, newIndex?: number) => {
    if (!isUndefined(oldIndex) && !isUndefined(newIndex) && oldIndex !== newIndex) {
      dispatch({
        type: 'diyReport/onSortEnd',
        payload: {
          oldIndex,
          newIndex,
        },
      })

      message.success('修改排序成功')
    }
  }

  const enableDragSort = () => {
    const ele = document.getElementById('components-sortable-container') as HTMLElement
    if (ele) {
      Sortable.create(ele, {
        onEnd(evt: SortableEvent) {
          if (evt.oldIndex !== evt.newIndex) {
            onSortEnd(evt.oldIndex, evt.newIndex)
          }
        },
      })
    }
  }

  // 初始化渲染有组件数据时默认选中第一个.
  useEffect(() => {
    if (components.length > 0) {
      dispatch({
        type: 'diyReport/setActiveComponentIdAndIdx',
        payload: {
          id: components[0].id,
          idx: 0,
        },
      })

      enableDragSort()
    }
  }, [])

  // 组件数据更新重新绑定拖动排序事件.
  useEffect(() => {
    enableDragSort()
  }, [components])

  // 选中组件.
  const handleClickComponent = (e: any) => {
    const target = e.target as HTMLElement

    if (target.dataset.id) {
      dispatch({
        type: 'diyReport/setActiveComponentIdAndIdx',
        payload: {
          id: target.dataset.id,
          idx: toNumber(target.dataset.idx),
        },
      })
    }
  }

  // 删除组件.
  const handleRemoveComponent = (idx: number) => {
    dispatch({
      type: 'diyReport/removeComponent',
      payload: {
        idx,
      },
    })
  }

  // 复制组件.
  const handleCopyComponent = (idx: number) => {
    dispatch({
      type: 'diyReport/copyComponent',
      payload: {
        idx,
        component: Object.assign({}, components[idx], { id: uuidv1() }),
      },
    })
  }

  // 确认添加组件.
  const confirmAddComp = (component: ComponentPickerItemType): void => {
    setAddCompModalVisible(false)

    const id = uuidv1()

    dispatch({
      type: 'diyReport/addComponent',
      payload: {
        id,
        type: component.type,
        name: component.name,
        data: { ...SchemasConfData[component.type], id },
      },
    })
  }

  // 跳转到报告 pdf 页面.
  const showReportPDFPage = () => {
    localStorage.setItem('DiyReportVal', JSON.stringify(reportVal))

    openNewWindow('/web-tool/report/pdf?init=1')
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setAddCompModalVisible(true)}>
            添加组件
          </Button>
          <Button
            type="primary"
            className={styles['ml-8']}
            icon={<DeliveredProcedureOutlined />}
            onClick={() => setRestoreJsonModalVisible(true)}
          >
            恢复报告
          </Button>
          <Button type="primary" className={styles['ml-8']} icon={<EyeOutlined />} onClick={() => showReportPDFPage()}>
            查看pdf报告
          </Button>
          <Button
            type="primary"
            className={styles['ml-8']}
            icon={<CopyOutlined />}
            onClick={() => setCopyJsonModalVisible(true)}
          >
            查看/复制报告数据
          </Button>
        </div>

        {alertClosed === '0' && (
          <Alert
            className={styles.alert}
            message="点击选中组件可以修改组件数据，按钮鼠标上下拖动组件可以修改排序。"
            type="info"
            closable
            onClose={() => setAlertClosed('1')}
          />
        )}

        <div className={styles.bd}>
          {components.length > 0 && (
            <>
              <div className={styles.middle}>
                <div
                  className={styles['components-container']}
                  id="components-sortable-container"
                  onClick={handleClickComponent}
                >
                  {components.map((item, idx) => (
                    <Component
                      key={`component-${item.id}-${idx}`}
                      {...item}
                      idx={idx}
                      active={activeComponentId === item.id}
                      onDelete={handleRemoveComponent}
                      onCopy={handleCopyComponent}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.right}>
                <Title title={`修改参数 ${activeComponent.name ? '-' : ''} ${activeComponent.name}`} />

                {ComponentConf.desc[activeComponent.type] && (
                  <div className={styles['component-desc']}>说明：{ComponentConf.desc[activeComponent.type]}</div>
                )}

                <div className={styles['operate-container']}>
                  <ComponentForm
                    key={`component-form-${activeComponentId}-${activeComponentIdx}`}
                    {...activeComponent}
                  />
                </div>
              </div>
            </>
          )}

          {components.length === 0 && (
            <Empty className={styles['empty']} image={Empty.PRESENTED_IMAGE_SIMPLE} description="您还未添加报表组件" />
          )}
        </div>
      </div>

      <AddCompModal visible={addCompModalVisible} onOk={confirmAddComp} close={() => setAddCompModalVisible(false)} />
      <RestoreJsonModal visible={restoreJsonModalVisible} close={() => setRestoreJsonModalVisible(false)} />
      <CopyJsonModal visible={copyJsonModalVisible} close={() => setCopyJsonModalVisible(false)} />
    </>
  )
}

export default DiyReport
