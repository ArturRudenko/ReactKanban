import React from 'react';

export default function Tag ({ match }) {
  return (
    <div>
        Tag {match.params.id}
    </div>
  )
};