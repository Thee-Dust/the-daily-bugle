import React from 'react'
import './StoryCard.css'
import { Link } from 'react-router-dom'

export default function StoryCard({ id, title, byLine, section }) {
  return (
    <Link to={`./${section}/${id}`} id={id} className='card'>
      <h3>{title}</h3>
      <span>{byLine}</span>
    </Link>
  )
}
