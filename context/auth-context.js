import { createContext, useContext, useMemo } from 'react'
import useSWR from 'swr'

const AuthContext = createContext()

const fetcher = (url) => fetch(url)
  .then((r) => r.json())
  .then((data) => {
    return { user: data?.user || null }
  })

function AuthProvider (props) {
  const { data, error } = useSWR('/api/user', fetcher)
  const value = useMemo(() => ({
    error,
    data,
    loading: !data
  }), [data, error])
  return <AuthContext.Provider value={value} {...props} />
}

function useAuth () {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
