import React from 'react'
import StoryCard from '../StoryCards/StoryCard'
import './Home.css'

export default function Home({ stories }) {
  console.log(stories)
  if(!!stories.section) {
    const { section, results } = stories

    const storyCards = results.map((story, index) => {
      return (
        <StoryCard
        key={index + 1}
        id={index}
        title={story.title}
        byLine={story.byline}
        section={section}
        />
      )
    })
    
    return (
    <div className='main-section'>
      <h1>{section}</h1>
      <div className='card-container'>
        {storyCards}
      </div>
    </div>
    )
  }
  return null
}
