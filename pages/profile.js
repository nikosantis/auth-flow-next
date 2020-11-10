
import { useUser } from '../lib/useUser'
import Layout from '../components/layout'

export default function Profile () {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Layout>
      <h1>Profile</h1>
      {user && <p>Your session: {JSON.stringify(user)}</p>}
    </Layout>
  )
}
