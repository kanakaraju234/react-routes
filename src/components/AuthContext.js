import React, { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const _user = JSON.parse(localStorage.getItem('token'))
  const [user, setUser] = useState(_user ? _user : null)
  const [isAuthenticated, setIsAuthenticated] = useState(_user ? true : false)

  const login = (user) => {
    if (!user) return

    localStorage.setItem('token', JSON.stringify(user))
    setUser(user)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
