import React from 'react'

export default function StoryCard({ id, title, byLine}) {
  return (
    <div id={id}>
      <h3>{title}</h3>
      <span>{byLine}</span>
    </div>
  )
}
