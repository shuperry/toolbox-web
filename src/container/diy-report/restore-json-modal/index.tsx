import { FC, useState } from 'react'
import { Modal, Input, message } from 'antd'
import { useDispatch } from 'umi'
import { trim } from 'lodash-es'

import Title from '@/components/title'

type PropType = {
  visible: boolean
  close: () => void
}

const _warning = () => {
  message.warning('请填写正确的json数组字符串')
}

const CopyJsonModal: FC<PropType> = ({ visible = false, close }) => {
  const dispatch = useDispatch()

  const [val, setVal] = useState('')

  const handleOk = () => {
    if (trim(val)) {
      try {
        const jsonVal: any[] = eval('(' + val + ')')

        if (Array.isArray(jsonVal) && jsonVal.length > 0) {
          dispatch({
            type: 'diyReport/reStoreReport',
            payload: { val: jsonVal },
          })

          message.success('报告恢复成功')

          close()
        } else {
          _warning()
        }
      } catch (e) {
        _warning()
      }
    } else {
      _warning()
    }
  }

  return (
    <>
      <Modal visible={visible} width={900} title={<Title title="恢复报告" />} onOk={handleOk} onCancel={close}>
        <Input.TextArea
          allowClear
          showCount
          autoSize={{ minRows: 10, maxRows: 15 }}
          onChange={(e) => {
            setVal(e.target.value)
          }}
        />
      </Modal>
    </>
  )
}

export default CopyJsonModal
