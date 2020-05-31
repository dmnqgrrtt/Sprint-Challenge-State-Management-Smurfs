import React, { useContext } from 'react';
import { smurfContext } from '../contexts/smurfContext';
import Smurf from './Smurf'

const SmurfsList = () => {

    const smurfsList = useContext(smurfContext).state.smurfs;
    console.log('smurfs', smurfsList)

    return (
        <div>
            {smurfsList.map(smurf => (
                <Smurf {...smurf} key={smurf.id}/>
            ))}
        </div>
    )
}

export default SmurfsList;