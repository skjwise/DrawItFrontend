import React from 'react';

const DrawingCard = ({drawing, username}) => {
    return (
        <div className='ui card' style={{height: "250px", width: "250px", margin: "20px"} } >
            <img src='./elephant.png' alt='elephant' style={{height: "250px", width: "250px"} }/>
            <p> By: {username}  </p>
        </div>
    );
}

export default DrawingCard;
