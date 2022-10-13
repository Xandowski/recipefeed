import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Index } from './pages'
import './styles/main.css'
import { ProtectedRoute } from './componentes/Route/ProtectedRoute'
import { useEffect } from 'react'

export const App = () => {
  const { isLoading } = useAuth0()
  console.log(isLoading)

  useEffect(() => {
    const loading = () => {
      if (isLoading) {
        return <div className="page-layout">LOADING</div>
      }
    }
    loading()
  }, [isLoading])

  const PrivateRoute = () => <Index />

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={import.meta.env.VITE_REDIRECT_URL}
    >
      <Routes>
        <Route path="/" element={<ProtectedRoute component={PrivateRoute} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Auth0Provider>
  )
}
