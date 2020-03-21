import React from 'react'
import './Person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

const Person = (props) =>{
    return (
        <Aux>
            <div>
                <p>Name : {props.name}</p>
                <p>Age: {props.age}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
            <div>
                <button onClick={props.delete}>Delete</button>
            </div>
        </Aux>
    )
}

export default withClass(Person,"Person");