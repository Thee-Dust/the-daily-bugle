import React, { useState, useEffect } from 'react'
import getStories from '../../ApiCall/Apicall'
import Navbar from '../Navbar/Navbar'
// import { Switch, Route } from 'react-router-dom'

export default function App() {
  const [ stories, setStories ] = useState([])
  const [ error, setError ] = useState('')


  useEffect(() => {
    const fetchStories = async () => {
      try {
        const topStories = await getStories('automobiles');
        setStories(topStories.results)
      } catch(e) {
        setError(e.message)
      }
    }
    fetchStories()
  }, [])

  return (
    <main>
      <Navbar/>
    </main>
  )
}
