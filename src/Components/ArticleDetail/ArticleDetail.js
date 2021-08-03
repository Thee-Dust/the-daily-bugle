import React, { useState, useEffect } from 'react'
import getStories from '../../ApiCall/Apicall'

export default function ArticleDetail({ section, id }) {
  const [ story, setStory ] = useState({});
  const [ error, setError ] = useState('');
  
  useEffect(() => {
    const getTopStory = async () => {
      try{
        const topStory = await getStories(section);
        setStory(topStory.results[id])
      } catch(e) {
        setError(e.message)
      }
    }
    getTopStory()
  }, [section, id])
  return (
    <div>
      {story.title}
    </div>
  )
}
