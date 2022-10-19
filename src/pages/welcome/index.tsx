import React from 'react'
import { Card, Alert } from 'antd'

export default (): React.ReactNode => {
  return (
    <Card>
      <Alert message="欢迎使用报表设计器" type="success" banner />
    </Card>
  )
}
