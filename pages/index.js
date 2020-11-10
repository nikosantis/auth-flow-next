import { useUser } from '../lib/useUser'
import Layout from '../components/layout'

export default function Home () {
  const user = useUser()

  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <section>
          {user && <p>User looged in as: {JSON.stringify(user)}</p>}
        </section>
      </main>
    </Layout>
  )
}
