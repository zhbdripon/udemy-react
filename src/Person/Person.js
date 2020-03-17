import React from 'react';
import './Person.css'

const Person = (props) =>{
    return (
        <div className="Person">
            <div>
                <div>
                    <p>Name : {props.name}</p>
                    <p>Age: {props.age}</p>
                    <input type="text" onChange={props.changed} value={props.name}/>
                </div>
                <div>
                    <button onClick={props.delete}>Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default Person;