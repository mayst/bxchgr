import { TextField, TextFieldProps } from "@mui/material"
import { forwardRef } from "react"

export const TextFieldBx = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => (
    <TextField
      ref={ref}
      {...props}
      fullWidth
      sx={{ mb: 2 }}
    />
  ))