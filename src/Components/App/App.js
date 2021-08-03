import React, { useState, useEffect } from 'react'
import getStories from '../../ApiCall/Apicall'
import Navbar from '../Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'

export default function App() {
  const [ stories, setStories ] = useState([])
  const [ error, setError ] = useState('')


  useEffect(() => {
    const fetchStories = async () => {
      try {
        const topStories = await getStories('automobiles');
        setStories(topStories)
      } catch(e) {
        setError(e.message)
      }
    }
    fetchStories()
  }, [])
  console.log(stories)
  const getTopStory = async (genre) => {
    try {
      const topStories = await getStories(genre);
      setStories(topStories)
    } catch(e) {
      setError(e.message)
    }
  }

  return (
    <main>
      <Navbar getTopStory={getTopStory}/>
      <Switch>
        <Route path='/' component={Home} stories={stories}/>
      </Switch>
    </main>
  )
}
