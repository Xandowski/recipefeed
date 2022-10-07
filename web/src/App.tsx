import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Index } from './pages'
import './styles/main.css'

export const App = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={import.meta.env.VITE_REDIRECT_URL}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Auth0Provider>
  )
}
