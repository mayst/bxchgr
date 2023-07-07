import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material"
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const RegisterForm = () => {

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
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
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
            name="email"
            type="email"
            required
            fullWidth
            id="email"
            label="Email"
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
            sx={{ mb: 2 }}
          />
          <TextField
            type="password"
            name="passwordConfirm"
            required
            fullWidth
            id="passwordConfirm"
            label="Confirm password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
