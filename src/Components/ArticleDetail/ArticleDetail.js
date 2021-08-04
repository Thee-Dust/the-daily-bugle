import React, { useState, useEffect } from 'react'
import getStories from '../../ApiCall/Apicall'
import './ArticleDetail.css'

export default function ArticleDetail({ section, id }) {
  const [ story, setStory ] = useState({});
  const [ error, setError ] = useState('');

  useEffect(() => {
    const getTopStory = async () => {
      setError('')
      try{
        const topStory = await getStories(section);
        setStory(topStory.results[id])
      } catch(e) {
        setError(e.message)
      }
    }
    getTopStory()
  }, [section, id])

  if(!!story.title){
    return (
      <div className='details-page'>
        <img src={story.multimedia[0].url} alt={story.multimedia[0].caption}/>
        <h1>{story.title}</h1>
        <h2>{story.abstract}</h2>
        <h4>{story.byline}</h4>
        <a href={story.url}>Read full article</a>
      </div>
    )
  }
  return null
}
