import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.person.map((item, index) =>{
    return <Person
        key={item.id}
        name={item.name}
        age={item.age}
        delete={props.delete.bind(this, index)}
        changed={(event) => props.changed (event, item.id)}
    />
})  

export default Persons;
