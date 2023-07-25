import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { useState } from 'react'
import { Footer } from './Footer'

export const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebarOpen = () => setIsSidebarOpen(true)
  const handleSidebarClose = () => setIsSidebarOpen(false)

  return (
    <>
      <Header onSidebarOpen={handleSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
