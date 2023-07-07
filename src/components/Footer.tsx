import { AppBar, Box, Toolbar, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box sx={{ mt: 'auto' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BXCHGR
          </Typography>
          <Typography variant="caption">2023</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
