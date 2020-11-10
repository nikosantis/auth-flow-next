import { useState } from 'react'
import Router from 'next/router'
import UnauthenticatedApp from '../components/unauthenticate-app'
import Layout from '../components/layout'
import Form from '../components/form'

export default function Login () {
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (res.status === 200) {
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <UnauthenticatedApp>
      <Layout>
        <div className="login">
          <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
        <style jsx>{`
          .login {
            max-width: 21rem;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
        `}</style>
      </Layout>
    </UnauthenticatedApp>
  )
}
