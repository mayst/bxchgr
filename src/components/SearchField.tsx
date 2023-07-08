import { TextField } from "@mui/material"

interface ISearchProps {
  onSearch: (value: string) => void
}

export const SearchField = ({ onSearch }: ISearchProps) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <TextField
      label="Search books..."
      variant="outlined"
      onChange={onChange}
      sx={{ width: '100%', mt: 3 }}
    />
  )
}
