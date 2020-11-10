import { useAuth } from '../context/auth-context'
import Layout from '../components/layout'
import AuthenticateApp from '../components/authenticate-app'

export default function Home () {
  const { data } = useAuth()

  return (
    <AuthenticateApp>
      <Layout>
        <main>
          <h1>Home</h1>
          <section>
            {data && <p>User looged in as: {JSON.stringify(data.user)}</p>}
          </section>
        </main>
      </Layout>
    </AuthenticateApp>
  )
}
