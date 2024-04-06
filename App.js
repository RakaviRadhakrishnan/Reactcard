// import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  //js
  return (
    <div className="App">
       <Greeting/>

      <Detials
        access="✔"
        img="https://th.bing.com/th?q=Baby+Boy+Cartoon+Characters&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
        name="AAA"
        batch="B45 guvi"
      />
      <Detials
        access="✔"
        img="https://th.bing.com/th/id/OIP.yG3zy-POBK29vC8oScSAugHaHR?w=206&h=202&c=7&r=0&o=5&pid=1.7"
        name="ABB"
        batch="B45 guvi"
      />
      <Detials
        access="❕"
        img="https://th.bing.com/th/id/OIP.J5dFEhklCY19hS1G3VGWeQHaOL?w=115&h=187&c=7&r=0&o=5&pid=1.7"
        name="ACC"
        batch="B45 guvi"
      />
    </div>
  );
}

export default App;
function Detials(props) {
  return (
    <div className="Name">
      <img src={props.img} alt={props.name} />
      <h2>
      <span>{props.access}</span>{props.name}</h2>
      <p>{props.batch}</p>
    </div>
  );
}
function Greeting(){
  // return(
  //   <div>
  //     <h1>Hi this is my first web page</h1>
  //   </div>
  // )
  return React.createElement("div",{id : "div-name" , className:"div-name"},
 React.createElement("h2",{className:"name"},"Hi  guvi. this is my first web page "))
} 
