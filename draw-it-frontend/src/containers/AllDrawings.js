import React from 'react';
import DrawingCard from '../components/DrawingCard';

const AllDrawings = ({allDrawings}) => {
  return (
    <div>
      {allDrawings.map(drawing => <DrawingCard key = {drawing.id} username = {drawing.user.username} drawing = {drawing.url}/>)}
    </div>
  );
}

export default AllDrawings;
