import { useAuth0 } from '@auth0/auth0-react'

export const Index = () => {
  const { logout } = useAuth0()

  return (
    <>
      <h1>Hello Index</h1>
      <button
        onClick={() =>
          logout({
            returnTo: import.meta.env.VITE_REDIRECT_LOGOUT_URL,
          })
        }
      >
        logout
      </button>
    </>
  )
}
