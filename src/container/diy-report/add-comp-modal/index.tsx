import { FC, useState, useEffect, Fragment } from 'react'
import classnames from 'classnames'
import { Modal } from 'antd'

import type { ComponentPickerDataType, ComponentPickerItemType } from '@/container/diy-report/types'

import data from '@/config/diy-report/component-picker'
import ComponentConf from '@/config/diy-report/component-conf'

import Title from '@/components/title'
import Img from '@/components/img'

import styles from './index.less'

type PropType = {
  visible: boolean
  close: () => void
  onOk: (component: ComponentPickerItemType) => void
}

const defComponent: ComponentPickerItemType = { type: '', name: '', thumbnail: '' }

const AddCompModal: FC<PropType> = ({ visible = false, close, onOk }) => {
  const [groupedComponents, _] = useState<ComponentPickerDataType>(data)
  const [checkedComponentType, setCheckedComponentType] = useState<string>('')
  const [checkedComponent, setCheckedComponent] = useState<ComponentPickerItemType>(defComponent)

  // 打开弹出框时清空已选中组件.
  useEffect(() => {
    if (visible) {
      setCheckedComponentType('')
    }
  }, [visible])

  // 切换组件选中状态.
  const toggleComponentChecked = (e: any) => {
    const target = e.target as HTMLElement

    if (target.dataset.type) {
      setCheckedComponentType(target.dataset.type)
    }
    if (target.dataset.component) {
      setCheckedComponent(eval('(' + target.dataset.component + ')'))
    }
  }

  return (
    <>
      <Modal
        visible={visible}
        width={900}
        onCancel={close}
        onOk={() => onOk(checkedComponent)}
        title={
          <div className={styles['title-container']}>
            <Title title="选择报告组件" />
          </div>
        }
      >
        {
          <div className={styles.bd}>
            {groupedComponents.map((group, idx1) => {
              if (group.show === false) {
                return null
              }

              return (
                <Fragment key={`comp-picker-group-${idx1}`}>
                  <div className={styles['group-name']}>{group.groupName}</div>
                  {group.components.length > 0 && (
                    <div className={styles.components} onClick={(e) => toggleComponentChecked(e)}>
                      {group.components.map((component, idx2) => {
                        if (component.show === false || !component.type) {
                          return null
                        }

                        return (
                          <div
                            key={`comp-picker-group-${idx1}-item-${component.type}-${idx2}`}
                            className={classnames(styles['component-item'], {
                              [styles.checked]: component.type === checkedComponentType,
                            })}
                            data-type={component.type}
                            data-component={JSON.stringify(component)}
                          >
                            <div className={styles['pointer-events-none']}>
                              <i
                                className={classnames(styles['select-icon'], {
                                  [styles.default]: component.type !== checkedComponentType,
                                  [styles.checked]: component.type === checkedComponentType,
                                })}
                              />

                              {component.thumbnail && (
                                <Img src={component.thumbnail} className={styles['thumbnail-img']} />
                              )}
                              <div className={styles.name}>{component.name}</div>
                              {ComponentConf.desc[component.type] && (
                                <div className={styles.desc}>说明：{ComponentConf.desc[component.type]}</div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </Fragment>
              )
            })}
          </div>
        }
      </Modal>
    </>
  )
}

export default AddCompModal
