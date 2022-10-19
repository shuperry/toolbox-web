import { FC, useState } from 'react'
import { useSelector } from 'umi'
import { Space, Popconfirm } from 'antd'
import classnames from 'classnames'
import { CopyOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

import ModuleItem from '@/container/report/components/common-pdf/module-item'

import type { ReportComponentType } from '@/container/diy-report/types'

import styles from './index.less'

type PropType = {
  id: string // 组件唯一 id.
  idx: number // 组件在列表中所处位置, 方便回写数据.
  active: boolean // 组件是否被选中.
  onDelete: (idx: number, id?: string) => void
  onCopy: (idx: number, id?: string) => void
}

const Component: FC<PropType> = ({ id, idx, active, onDelete, onCopy }) => {
  const [hover, setHover] = useState<boolean>(false)

  const data: any = useSelector(
    (state) => (state['diyReport'].components as ReportComponentType[]).filter((item) => item.id === id)[0].data,
  )

  return (
    <div
      className={classnames(styles['component-container'], { [styles['active']]: active })}
      data-id={id}
      data-idx={idx}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles['comp-bd']}>
        {data && <ModuleItem userInfo={{}} key={`module-item-${id}-${idx}`} item={data} />}
      </div>

      {hover && (
        <div className={styles.operations}>
          <Space>
            <Popconfirm
              title="确定复制该组件吗？"
              placement="topRight"
              icon={<QuestionCircleOutlined style={{ color: '#faad14' }} />}
              onConfirm={() => onCopy(idx)}
            >
              <CopyOutlined className={classnames(styles['copy-icon'], styles.pointer)} />
            </Popconfirm>

            <Popconfirm
              title="确定删除该组件吗？"
              placement="topRight"
              icon={<QuestionCircleOutlined style={{ color: '#f5222d' }} />}
              onConfirm={() => onDelete(idx)}
            >
              <DeleteOutlined className={classnames(styles['del-icon'], styles.pointer)} />
            </Popconfirm>
          </Space>
        </div>
      )}
    </div>
  )
}

export default Component
