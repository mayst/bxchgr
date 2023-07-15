import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL } from '../../constants'
import { Book } from '../types/book'

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
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
