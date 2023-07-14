import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

interface IHeaderProps {
  onSidebarOpen: () => void
}

export const Header = (props: IHeaderProps) => {
  const { onSidebarOpen } = props

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BXCHGR
          </Typography>
          <Button
            color="inherit"
            sx={{ mr: 2 }}
            component={Link}
            to='/login'
          >
            Login
          </Button>
          <Button color="inherit"
            component={Link}
            to='/register'
          >Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
