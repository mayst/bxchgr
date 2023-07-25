import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { forwardRef, useId } from "react"

interface ISelectBxProps {
  label: string
  value?: string
  onChange: () => void
  options: {
    value: string,
    title: string
  }[]
  fullWidth?: boolean
}

export const SelectBx = forwardRef<HTMLSelectElement, ISelectBxProps>(
  (props: ISelectBxProps, ref) => {
    const { label, value, onChange, options, fullWidth } = props

    const selectId = useId()

    return (
      <FormControl fullWidth={fullWidth}>
        <InputLabel id={`${selectId}-label`}>{label}</InputLabel>
        <Select
          labelId={`${selectId}-label`}
          id={selectId}
          value={value}
          label={label}
          onChange={onChange}
          ref={ref}
        >
          {options.map(option => (
            <MenuItem
              key={option.title}
              value={option.value}
            >
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  })
