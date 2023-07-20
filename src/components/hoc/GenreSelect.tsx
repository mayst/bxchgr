import { useState } from 'react'
import { MultipleSelectBx } from '../inputs/MultipleSelectBx'

const genresList = [
  {
    id: 0,
    name: 'Thriller',
    selected: true
  },
  {
    id: 1,
    name: 'Fantasy',
    selected: false
  },
  {
    id: 2,
    name: 'Mystery',
    selected: true
  },
  {
    id: 3,
    name: 'Dystopian',
    selected: false
  },
  {
    id: 4,
    name: 'Romance',
    selected: false
  },
  {
    id: 5,
    name: 'Westerns',
    selected: false
  },
]

export const GenreSelect = () => {
  const [genres, setGenres] = useState(genresList)

  const handleSelectGenre = (id: number) => {
    setGenres(prev => prev.map(
      genre => genre.id !== id
        ? genre
        : { ...genre, selected: !genre.selected }))
  }

  return (
    <MultipleSelectBx
      label='Genres'
      fullWidth
      options={genres}
      onChange={handleSelectGenre}
    />
  )
}
