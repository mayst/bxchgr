import { useState } from "react"
import { MultipleSelectBx } from "../components/inputs/MultipleSelectBx"

export const HomePage = () => {
  const [genres, setGenres] = useState([
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
  ])

  const handleSelectGenre = (id: number) => {
    setGenres(prev => prev.map(
      genre => genre.id !== id
        ? genre
        : { ...genre, selected: !genre.selected }))
  }

  return (
    <div>
      <MultipleSelectBx
        fullWidth
        label="Genres"
        options={genres}
        onChange={handleSelectGenre}
      />
    </div>
  )
}
