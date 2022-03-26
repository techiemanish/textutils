import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const a = <h2>Header</h2>;
// ReactDOM.render(a, document.getElementById('a'));

// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

// ReactDOM.render(myelement, document.getElementById('a'));

// const list = (
//   <>
//   <h1>My List</h1>
//   <ol>
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Orange</li>
//     <li>Guava</li>
//   </ol>
//   </>
// );

// ReactDOM.render(list, document.getElementById("list"));

// const obj = {
//   name: "Manish Tiwari",
//   qualification: "B.sc Computer Science",
//   previous_org: "HCL",
//   current_org: "UHG",
//   designation: "Software Engineer"
// }

// function userdetails(){
//     return obj.name + " has done graduation in " + obj.qualification + ". He was previously working with " + 
//     obj.previous_org + ". Currently, He is working in " + obj.current_org + " as " + obj.designation;
// }

// const user_details = (<>
// <h1>Details: </h1>
// <b>{userdetails(obj)}</b>
// </>);

// ReactDOM.render(user_details, document.getElementById("userdetails"));


