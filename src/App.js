import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component{
  state = {
    person: [
      { id:1, name: 'Ash', age: 10 },
      { id:2, name: 'Misty', age: 13 },
      { id:3, name: 'Brock', age: 15 }
    ]
  }

  removeItem = () =>{
    this.setState(({person})=>({
      person:person.filter(i => i.age!==13)
    }))
  }

  render(){
    const {person} = this.state

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi there, I am a react App</h1>
        {
          person.map((item)=>(
            <Person key={item.id} name={item.name} age={item.age}/>
          ))
        }
        <button style={style} onClick={this.removeItem}>Remove</button>

      </div>
    );
  }
}

export default App;
