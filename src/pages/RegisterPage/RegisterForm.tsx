import { Avatar, Box, Container, Typography } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { TextFieldBx } from "../../components/inputs/TextFieldBx";
import { FormButton } from "../../components/FormButton";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

type Inputs = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}



export const RegisterForm = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<Inputs>()
  const passwordValue = watch('password')

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)

  const rules = useMemo(() => ({
    username: {
      required: t('Username is required'),
      minLength: {
        value: 5,
        message: t('Username should be at least 5 characters long')
      }
    },
    email: {
      required: t("Email is required"),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("Invalid email address")
      }
    },
    password: {
      required: t('Password is required'),
      minLength: {
        value: 8,
        message: t('Password should be at least 8 characters long')
      }
    },
    passwordConfirm: (password: string) =>
    ({
      required: t('Password confirmation is required'),
      validate: (val: string) => {
        if (password !== val) return t('Passwords do not match')
      }
    })

  }), [t])

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
          {t('Create Account')}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, width: '100%' }}>

          <TextFieldBx
            autoFocus
            id="username"
            label={t("Username")}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            {...register(
              'username',
              rules.username
            )}
          />

          <TextFieldBx
            autoComplete="email"
            id="email"
            label="Email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            {...register(
              'email',
              rules.email
            )}
          />

          <TextFieldBx
            id="password"
            label={t("Password")}
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...register(
              'password',
              rules.password
            )}
          />

          <TextFieldBx
            id="passwordConfirm"
            label={t("Confirm Password")}
            type="password"
            error={Boolean(errors.passwordConfirm)}
            helperText={errors.passwordConfirm?.message}
            {...register(
              'passwordConfirm',
              rules.passwordConfirm(passwordValue)
            )}
          />

          <FormButton>
            {t('Sign Up')}
          </FormButton>
        </Box>
      </Box>
    </Container>
  )
}
