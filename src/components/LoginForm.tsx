import { Avatar, Box, Container, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

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
          <FormInput
            autoFocus
            required
            name="username"
            id="username"
            label="Username"
          />
          <FormInput
            required
            type="password"
            name="password"
            id="password"
            label="Password"
          />
          <FormButton>
            Log in
          </FormButton>
        </Box>
      </Box>
    </Container>
  )
}
