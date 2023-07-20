import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useId } from "react"

type Option = {
  id: number
  name: string,
  selected: boolean
}

interface ISelectBxProps {
  label: string
  onChange: (id: number) => void
  options: Option[]
  fullWidth?: boolean
}

export const MultipleSelectBx =
  (props: ISelectBxProps) => {
    const { label, onChange, options, fullWidth = false } = props

    const selectId = useId()

    const selected = options
      .filter(opt => opt.selected)
      .map(opt => opt.name)

    return (
      <>
        <FormControl fullWidth={fullWidth}>
          <InputLabel id={selectId + '-label'}>{label}</InputLabel>
          <Select
            multiple
            labelId={selectId + '-label'}
            id={selectId}
            value={selected}
            label={label}
          >
            {options.map(opt => (
              <MenuItem
                key={opt.name}
                value={opt.name}
                onClick={() => onChange(opt.id)}
              >
                {opt.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box
          display='flex'
          flexWrap='wrap'
          gap={1}
          mt={2}
        >
          {options
            .filter(opt => opt.selected)
            .map(opt => (
              <Chip
                key={opt.name}
                label={opt.name}
                onDelete={() => onChange(opt.id)}
              />
            ))}
        </Box>
      </>
    )
  }