import React from 'react';
import './UserInput.css';

const compo = (props) => {
    return (
        <div>
            <input id="compo" type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default compo;
