import { Button, ButtonProps } from "@mui/material"

export const FormButton = (props: ButtonProps) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 2 }}
      {...props}
    >{props.children}</Button>
  )
}
