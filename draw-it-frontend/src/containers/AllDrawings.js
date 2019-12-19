import React from 'react';
import DrawingCard from '../components/DrawingCard';

const AllDrawings = ({allDrawings}) => {
  return (
    <div>
      {allDrawings.map(drawing => <DrawingCard key={drawing.id} drawing={drawing} />)}
    </div>
  );
}

export default AllDrawings;
