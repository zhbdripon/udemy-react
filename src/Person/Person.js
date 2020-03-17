import React from 'react';
import './Person.css'

const Person = (props) =>{
    return (
        <div className="Person">
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person;