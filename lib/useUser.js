import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url)
  .then((r) => r.json())
  .then((data) => {
    return { user: data?.user || null }
  })

export function useUser ({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR('/api/user', fetcher)

  const user = data?.user
  const finished = Boolean(data)
  const hasuser = Boolean(user)

  useEffect(() => {
    if (!redirectTo || !finished) return
    if (
      (redirectTo && !redirectIfFound && !hasuser) ||
      (redirectIfFound && hasuser)
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, redirectIfFound, finished, hasuser])

  return error ? null : user
}
