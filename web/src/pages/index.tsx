import { useAuth0 } from '@auth0/auth0-react'

export const Index = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Entrar</button>
    </>
  )
}
