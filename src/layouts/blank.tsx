import React from 'react'
import { PageContainer } from '@ant-design/pro-layout'

const BlankLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PageContainer title={false} pageHeaderRender={false}>
      {children}
    </PageContainer>
  )
}

export default BlankLayout
