import React from 'react';
import { useSelector } from "react-redux";

export default function Tags () {
  const tags = useSelector(state => state.tags)

  return (
    <div>
      <h1>Tags</h1>
      {tags.map((tag) =>
        <div key={tag.id}>{tag.title}</div>
      )}
    </div>
  )
}