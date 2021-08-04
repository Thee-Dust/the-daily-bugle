import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ getTopStory }) {
  const genreRef = useRef()
  const options = [ 'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world' ]
  const storyOptions = options.map((topic, index) => <option key={index + 1} value={topic}>{topic}</option> )

  const formSubmit = (e) => {
    e.preventDefault()
    getTopStory(genreRef.current.value)
  }


  return (
    <header>
      <Link to='/'><h1>The Daily Bugle</h1></Link>
      <form onSubmit={(e) => formSubmit(e)}>
        <select defaultValue ref={genreRef} >
          <option  defaultValue >Choose a Genre</option>
          {storyOptions}
        </select>
        <button type='submit'><i className="fas fa-search"></i></button>
      </form>
    </header>
  )
}
