import React from 'react';

import './style.css';

const Brick = (props) => {
    console.log("how does my props look",props);
    return(
        <div className="brick-container">
            {props.name}
        </div>
             
    )
    };

export default Brick;