import React from 'react';
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

class App extends React.Component{
  state = {
    person: [
      { id:1, name: 'Ash', age: 10 },
      { id:2, name: 'Misty', age: 13 },
      { id:3, name: 'Brock', age: 15 }
    ],
    showPerson: false
  }

  handleShowItem = () =>{
    const currentState = this.state.showPerson
    this.setState({
      showPerson:!currentState
    })
  }

  handleDeletePerson = (index) =>{
    const newList = this.state.person.slice()
    newList.splice(index,1)
    this.setState({person:newList})
  }

  handleNameChange = (event,id) =>{
    const personIndex = this.state.person.findIndex(item=>item.id===id)

    const updatedPerson = {...this.state.person[personIndex]}
    updatedPerson.name = event.target.value

    const updatedPersonList = [...this.state.person]
    updatedPersonList[personIndex] = updatedPerson

    this.setState({person:updatedPersonList})
  }

  render(){

    const {person} = this.state
    const {showPerson} = this.state
    let listOfPerson = null

    if(showPerson){
      listOfPerson = <Persons 
          person={person} 
          changed={this.handleNameChange} 
          delete={this.handleDeletePerson}/>
    }

    return (
      <Aux >
        <Cockpit 
          persons={this.state.person} 
          toggle={this.handleShowItem} 
          show={this.state.showPerson}
        />
        {listOfPerson}
      </Aux>
    );
  }
}

export default withClass(App,"App");
