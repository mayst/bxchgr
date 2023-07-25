import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book } from '../types/book'
const baseUrl = import.meta.env.VITE_SERVER_URL

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        searchBooksByName: builder.query<Book[], string>({
            query: searchTerm => ({
                url: 'books/search',
                params: {
                    q: searchTerm,
                },
            }),
        }),
    }),
})

export const { useSearchBooksByNameQuery } = searchApi
