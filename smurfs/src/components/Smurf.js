import React from 'react';

const Smurf = props => {
    return (
        <div>
            <p>{props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    );
}

export default Smurf;