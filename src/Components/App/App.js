import React, { useState, useEffect } from 'react'
import getStories from '../../ApiCall/Apicall'
import Navbar from '../Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ArticleDetail from '../ArticleDetail/ArticleDetail'
import './App.css'

export default function App() {
  const [ stories, setStories ] = useState({});
  const [ error, setError ] = useState('');


  useEffect(() => {
    const fetchStories = async () => {
      try {
        const topStories = await getStories('Automobiles');
        setStories(topStories)
      } catch(e) {
        setError(e.message)
      }
    }
    fetchStories()
  }, [])
  
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
        <Route exact path='/'>
          <Home stories={stories}/>
        </Route>
        <Route path='/:section/:id'
        render={({ match }) => {
          const section = match.params.section
          const id = match.params.id
          return <ArticleDetail section={section} id={id}/>
          }
        }/>
      </Switch>
    </main>
  )
}
