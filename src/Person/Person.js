import React from 'react'
import './Person.css'
import Radium from 'radium'

const Person = (props) =>{
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
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

export default Radium(Person);