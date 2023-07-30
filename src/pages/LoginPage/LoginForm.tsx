import { Avatar, Box, Container, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextFieldBx } from "../../components/inputs/TextFieldBx";
import { FormButton } from "../../components/FormButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from 'react-i18next'
import { useMemo } from "react";

type Inputs = {
  username: string,
  password: string
}

export const LoginForm = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data)

  const rules = useMemo(() => ({
    username: {
      required: t('Username is required'),
      minLength: {
        value: 5,
        message: t('Username should be at least 5 characters long')
      }
    },
    password: {
      required: t('Password is required'),
      minLength: {
        value: 8,
        message: t('Password should be at least 8 characters long')
      }
    }
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('Log in')}
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

          <FormButton>
            {t('Log in')}
          </FormButton>
        </Box>
      </Box>
    </Container>
  )
}
