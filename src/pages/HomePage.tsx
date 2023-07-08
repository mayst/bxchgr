import { useQuery } from "@tanstack/react-query"
import { SearchField } from "../components/SearchField"
import { SERVER_URL } from "../consts"
import { useState } from "react"

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // eslint-disable-next-line
  const result = useQuery({
    queryKey: ['books', searchTerm],
    enabled: Boolean(searchTerm),
    queryFn:
      () => {
        if (!searchTerm.length) return
        return fetch(`${SERVER_URL}/books/search?q=${searchTerm}`)
      }
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <>
      <SearchField onSearch={handleSearch} />
    </>
  )
}
