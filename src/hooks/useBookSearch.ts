import { useState } from 'react'
import { useSearchBooksByNameQuery } from '../store/services/searchApi'

export const useBookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const { data, isLoading, error } = useSearchBooksByNameQuery(searchTerm, {
        skip: searchTerm === '',
    })

    const handleSearch = (newValue: string) => {
        setSearchTerm(newValue)
    }

    return { data, isLoading, error, handleSearch }
}
