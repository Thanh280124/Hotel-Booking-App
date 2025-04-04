import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import 'sweetalert2/dist/sweetalert2.js'
import { store } from './redux/features/store.js'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <AuthProvider> 
        <RouterProvider router={router} />
      </AuthProvider>
  </Provider>,
)
