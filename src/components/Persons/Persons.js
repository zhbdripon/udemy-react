import React from 'react';
import Person from './Person/Person';
import { Component } from 'react';


class Persons extends Component{
    constructor(props){
        super(props)
        this.lastPersonRef = React.createRef();
    }

    componentDidMount(){
        this.lastPersonRef.current.focusFromParentComponent()
    }

    render(){
        return this.props.person.map((item, index) => {
            return <Person
                key={item.id}
                name={item.name}
                age={item.age}
                delete={this.props.delete.bind(this, index)}
                changed={(event) => this.props.changed(event, item.id)}
                ref={this.lastPersonRef}
            />
        })  
    }
}

export default Persons;
