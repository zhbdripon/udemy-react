import React from 'react';
import './App.css'
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const {person} = this.state
    const {showPerson} = this.state
    let listOfPerson = null

    if(showPerson){
      listOfPerson = person.map((item,index) => (
        <Person 
          key={item.id} 
          name={item.name} 
          age={item.age} 
          delete={this.handleDeletePerson.bind(this,index)} 
          changed = {(event)=>this.handleNameChange(event,item.id)}
        />
      ))
      style.backgroundColor = 'red'    }


    let classes = []
    if(this.state.person.length<=2){
        classes.push('red')
    }
    if (this.state.person.length <= 1) {
      classes.push('bold')
    }

    classes = classes.join(' ');

    return (
      <div className="App">
        <h1 className={classes}>Hi there, I am a react App</h1>
        <button style={style} onClick={this.handleShowItem}>{showPerson?'Remove':'show'}</button>
        {listOfPerson}
      </div>
    );
  }
}

export default App;
