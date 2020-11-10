import { useEffect } from 'react'
import { useRouter } from 'next/router'
import WideLoader from './wide-loader'
import { useAuth } from '../context/auth-context'

export default function UnauthenticatedApp ({ children }) {
  const { data, error, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && data && data.user) {
      router.push('/profile')
    }
  }, [loading, data, router])

  if (!error && !loading && !data.user) {
    return (
      <>{children}</>
    )
  }

  return <WideLoader />
}
