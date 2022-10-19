import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, message } from 'antd'
import React, { useState } from 'react'
import { ProFormText, LoginForm } from '@ant-design/pro-form'
import { history } from 'umi'

import Img from '@/components/img'

import styles from './index.less'

const LoginMessage: React.FC<{
  content: string
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
)

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({})

  const handleSubmit = async (values: API.LoginParams) => {
    if (values.username === 'admin' && values.password === 'admin') {
      message.success('登录成功！')
    } else {
      message.error('用户名或密码错误(admin/admin)')
    }

    /** 此方法会跳转到 redirect 参数所在的位置 */
    if (!history) return
    const { query } = history.location
    const { redirect } = query as { redirect: string }
    history.push(redirect || '/')

    setUserLoginState({ status: 'ok' })
  }
  const { status, type: loginType } = userLoginState

  return (
    <div className={styles.container}>
      <LoginForm
        logo={<Img style={{}} src="/images/logo.png" />}
        title="报表设计器"
        subTitle="  "
        initialValues={{
          autoLogin: true,
        }}
        onFinish={async (values) => {
          await handleSubmit(values as API.LoginParams)
        }}
      >
        {status === 'error' && loginType === 'account' && <LoginMessage content="用户名或密码错误(admin/admin)" />}

        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={styles.prefixIcon} />,
          }}
          placeholder="用户名: admin"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={styles.prefixIcon} />,
          }}
          placeholder="密码: admin"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
      </LoginForm>
    </div>
  )
}

export default Login
