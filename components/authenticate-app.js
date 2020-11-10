import { useEffect } from 'react'
import { useRouter } from 'next/router'
import WideLoader from './wide-loader'
import { useAuth } from '../context/auth-context'

export default function AuthenticateApp ({ children }) {
  const { data, error, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !data.user) {
      router.push('/login')
    }
  }, [loading, data, router])

  if (!error && !loading && data && data.user) {
    return <>{children}</>
  }

  return <WideLoader />
}
