import { FC } from 'react'
import classnames from 'classnames'
import { Modal } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { useSelector } from 'umi'

import Title from '@/components/title'

import { copyToClipboard } from '@/utils'

import type { ReportComponentType } from '@/container/diy-report/types'

import styles from './index.less'

type PropType = {
  visible: boolean
  close: () => void
}

const CopyJsonModal: FC<PropType> = ({ visible = false, close }) => {
  const val: any = useSelector((state) =>
    JSON.stringify(state['diyReport'].components.map((item: ReportComponentType) => item.data)),
  )

  return (
    <>
      <Modal
        visible={visible}
        width={900}
        onCancel={close}
        title={
          <div className={styles['title-container']}>
            <Title title="查看/复制报告数据" />
            <div className={classnames(styles['copy-btn'], styles.pointer)}>
              <CopyOutlined className={styles.icon} />
              <span className={styles.text} onClick={() => copyToClipboard(val, true)}>
                复制
              </span>
            </div>
          </div>
        }
        footer={null}
      >
        {val}
      </Modal>
    </>
  )
}

export default CopyJsonModal
