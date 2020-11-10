import Layout from '../components/layout'
import AuthenticateApp from '../components/authenticate-app'
import { useAuth } from '../context/auth-context'

export default function Profile () {
  // const user = useAuth()

  return (
    <AuthenticateApp>
    <Layout>
      <h1>Profile</h1>
      {/* {user && <p>Your session: {JSON.stringify(user)}</p>} */}
    </Layout>
    </AuthenticateApp>
  )
}
