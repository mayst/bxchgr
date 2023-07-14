import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Layout } from './components/Layout'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    },
])
