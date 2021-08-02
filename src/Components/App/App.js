import React, { useState, useEffect } from 'react'
import getStories from '../../ApiCall/Apicall'

export default function App() {
  const [ stories, setStories ] = useState([])
  const [ error, setError ] = useState('')


  // arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await getStories('automobiles');
        setStories(response.results)
      } catch(e) {
        setError(e.message)
      }
    }
    fetchStories()
  }, [])

  return (
    <main>
      
    </main>
  )
}
