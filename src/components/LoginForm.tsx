import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const LoginForm = () => {

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  return (
    <Container maxWidth="xs" >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 4
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: '100%' }}>
          <TextField
            name="username"
            required
            fullWidth
            id="username"
            label="Username"
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            type="password"
            name="password"
            required
            fullWidth
            id="password"
            label="Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
