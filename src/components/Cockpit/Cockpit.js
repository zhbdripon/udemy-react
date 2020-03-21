import React from 'react';
import './Cockpit.css'
<<<<<<< HEAD
import Aux from '../../hoc/Aux'
=======
>>>>>>> 175f86e223ebeeec75abf87cab34e4a84fb09a38

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
<<<<<<< HEAD
         <Aux>
               <h1 className={classes}>Hi there, I am a react App</h1>
               <button style={style} onClick={props.toggle} >{props.show?'Remove':'Show'}</button>
         </Aux>
=======
         <div>
               <h1 className={classes}>Hi there, I am a react App</h1>
               <button style={style} onClick={props.toggle} >{props.show?'Remove':'Show'}</button>
         </div>
>>>>>>> 175f86e223ebeeec75abf87cab34e4a84fb09a38
     )
}

export default Cockpit;