import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <ToastContainer style={`${window.innerWidth <= 500 ? 'width:50px !important':''}`}/>
    <App />
  </div>
)
