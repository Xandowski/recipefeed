import { withAuthenticationRequired } from '@auth0/auth0-react'

type ProtectedRouteProps = {
  component: React.ComponentType<object>
}

export const ProtectedRoute = ({ component }: ProtectedRouteProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => {
      return (
        <div>
          <div className="page-layout">LOADING</div>
        </div>
      )
    },
  })

  return <Component />
}
