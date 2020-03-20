import React from 'react';
import './Cockpit.css'

const Cockpit = (props) =>{

     const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
     }

     if(props.show) style.backgroundColor = 'red';
 
     let classes = []
     if (props.persons.length <= 2) {
          classes.push('red')
     }
     if (props.persons.length <= 1) {
          classes.push('bold')
     }

     classes = classes.join(' ');

     return (
         <div>
               <h1 className={classes}>Hi there, I am a react App</h1>
               <button style={style} onClick={props.toggle} >{props.show?'Remove':'Show'}</button>
         </div>
     )
}

export default Cockpit;