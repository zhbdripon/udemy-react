import React, {Component} from 'react'
import './Person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

class Person extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    // componentDidMount(){
    //     this.inputRef.current.focus()
    // }

    focusFromParentComponent(){
        this.inputRef.current.focus()
    }

    render(){
        return (
            <Aux>
                <div>
                    <p>Name : {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                    <input 
                        type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name}
                        ref={this.inputRef}
                    />
                </div>
                <div>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </Aux>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    delete: PropTypes.func,
}

export default withClass(Person,"Person");