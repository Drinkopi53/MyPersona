import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage'
import './index.css'
import { app } from './firebaseConfig'; // Import Firebase app instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)