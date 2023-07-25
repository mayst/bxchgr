import { SearchField } from "../components/inputs/SearchField"
import { useBookSearch } from "../hooks/useBookSearch"

export const HomePage = () => {
  const { data, isLoading, error, handleSearch } = useBookSearch()

  return (
    <>
      <SearchField
        placeholder="Search books..."
        onSearch={handleSearch}
      />
      {error && <h3>Error while loading search result</h3>}
      {isLoading && <h3>Loading...</h3>}
      {data && data.map(book => <p>{book.name}</p>)}
    </>
  )
}
