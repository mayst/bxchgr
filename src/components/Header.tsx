import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
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
          <Button color="inherit" sx={{ mr: 2 }}>Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
