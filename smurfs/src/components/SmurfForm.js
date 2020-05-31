import React, { useState, useContext } from 'react';
import { smurfContext } from '../contexts/smurfContext';
import axios from 'axios';


const SmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});
    const updateSmurfs = useContext(smurfContext).updateSmurfs;
    const loading = useContext(smurfContext).loading;
    const error = useContext(smurfContext).error;

    const handleChanges = e => {
        e.preventDefault();
        setNewSmurf({...newSmurf, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        loading("We are adding you're smurf to the village");
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log('after submit', res);
                updateSmurfs(res.data);
            })
            .catch(err => {
                error("Sorry, we are unable to add your smurf to the village.");
                console.log('error from catch', err)
            })
        console.log('newsmurf', newSmurf)
        setNewSmurf({name: '', age: '', height: ''})

    }



    return (
        <form onSubmit={handleSubmit}>
            <label>
                Smurf Name: 
                <input type='text' name='name' onChange={handleChanges} value={newSmurf.name}/>
            </label>
            <label>
                Smurf Age: 
                <input type='number' name='age' onChange={handleChanges} value={newSmurf.age}/>
            </label>
            <label>
                Smurf Height: 
                <input type='text' name='height' onChange={handleChanges} value={newSmurf.height}/>
            </label>
            <button type='submit'>Add Smurf</button>
        </form>
    );
};

export default SmurfForm;