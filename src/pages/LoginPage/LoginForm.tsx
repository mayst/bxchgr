import { Avatar, Box, Container, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextFieldBx } from "../../components/inputs/TextFieldBx";
import { FormButton } from "../../components/FormButton";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string,
  password: string
}

const rules = {
  username: {
    required: 'Username is required',
    minLength: {
      value: 5,
      message: 'Username should be at least 5 characters long'
    }
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password should be at least 8 characters long'
    }
  }
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)

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
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, width: '100%' }}>

          <TextFieldBx
            autoFocus
            id="username"
            label="Username"
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            {...register(
              'username',
              rules.username
            )}
          />

          <TextFieldBx
            id="password"
            label="Password"
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...register(
              'password',
              rules.password
            )}
          />

          <FormButton>
            Log in
          </FormButton>
        </Box>
      </Box>
    </Container>
  )
}
