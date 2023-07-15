import { IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

interface ISearchFieldProps {
  placeholder?: string
  onSearch: (searchTerm: string) => void
}

export const SearchField = (props: ISearchFieldProps) => {
  const { placeholder, onSearch } = props
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
    setSearchTerm('')
  }

  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
