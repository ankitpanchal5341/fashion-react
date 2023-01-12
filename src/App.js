import React from 'react'
import { Header } from './Components'
import MainRoutes from './Routes/MainRoutes'
import './App.css'
export default function App() {
  return (
    <div style={{ margin: -8, padding: 0 }}>
      <Header />
      <MainRoutes />
    </div>
  )
}