import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Student } from './util';


let Jayden = new student('Jayden smith', 16);
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Greeting(props) {
  return ( 
    <h1>Hello, my name is {props.name}</h1>
  )
}

function container() {
  return (
    <div className='container'>
      <app />
    </div>
  )
}


function ButtonContainer(props) {
  
  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setCount(count + 1);
    alert('you clicked the button' + count + ' times');
  }

  function handleHover(e) {
    e.preventDefault();
    alert('you hovered over button')
  }
  
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onMouseOver={handleHover}>Hover here</button>
      <h1>{props.name}</h1>
    </div>
  )
}

const heading = <h1>Hello, my name is Daniel Mejia</h1>
const Foot = <h1>{'string1' + 'string2'}</h1>

function App() {
  return (
    <div className='App'>
      {heading}     
      {/* heading element is refrenced */}
      {11 + 6}
      {' Hi my name is ' + 'Daniel'}


      {/* Refrencing greeting function */}
      <Greeting name='Daniel'/>

      <ButtonContainer name='daniel'/>
    </div>
  );
}

export default App;
