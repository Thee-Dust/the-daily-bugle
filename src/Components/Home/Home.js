import React from 'react'
import StoryCard from '../StoryCards/StoryCard'

export default function Home({ stories }) {
  console.log(stories)
  if(!!stories.section) {
    const { section, results } = stories

    const storyCards = results.map((story, index) => {
      return (
        <StoryCard
        key={index + 1}
        id={index + 1}
        title={story.title}
        byLine={story.byline}
        />
      )
    })
    
    return (
    <div>
      <h1>{section}</h1>
      <div>
        {storyCards}
      </div>
    </div>
    )
  }
  return null
}
