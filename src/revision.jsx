// import React, { useState } from "react";
// import Header from "./revison-component";
// This is a Alternative page of all react lessons
// Creating a component
// there are 2 different ways to create components
// 1.class component - before ES6
// 2.function component - ES6 (recommended)

// lets create a component
// 1.class components
// import React from "react";
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>hello class component</h1>
//       </>
//     );
//   }
// }
// export default App;

// 2.function component
// function App() {
//   return (
//     <>
//       <h1>hello function component</h1>
//     </>
//   );
// }
// export default App;

// Now lets see about creating multiple component from another file
// class component
// ex = 01
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <Header />
//         <Header />
//       </>
//     );
//   }
// }
// export default App;

//Now lets see in function component
// ex = 02
// function App() {
//   return (
//     <>
//       <Header />
//       <Header />
//       <Header />
//     </>
//   );
// }
// export default App;

// Now lets create a varibels inside those component
// class component
// class App extends React.Component {
//   render() {
//     let name = "class component";
//     return (
//       <>
//         <h1>hello {name}</h1>
//       </>
//     );
//   }
// }
// export default App;

// function component - creating variables
// function App() {
//   let name = "functional component";
//   return (
//     <>
//       <h1>hello {name}</h1>
//     </>
//   );
// }
// export default App;

// Now lets see about how to pass varibale from parent to child component
// parent component - class component
// ex = 03
// class App extends React.Component {
//   render() {
//     let name = "class component";

//     return (
//       <>
//         <Header variableName={name} />
//       </>
//     );
//   }
// }
// export default App;

// parent component - functional component
// ex = 04
// function App() {
//   let name = "functional component";
//   return (
//     <>
//       <Header variableNAme={name} />
//     </>
//   );
// }
// export default App;

// Now lets see about passing variables child to parent
// class component - parent component
// ex = 05
// class App extends React.Component {
//   render() {
//     const fn = (msg) => {
//       console.log(msg);
//     };
//     return (
//       <>
//         <Header fnName={fn} />
//       </>
//     );
//   }
// }
// export default App;

// functional component - parent component
// ex = 06
// function App() {
//   const fn = (msg) => {
//     console.log(msg)
//   }
//   return (
//     <>
//       <Header fnName = {fn}/>
//     </>
//   );
// }
// export default App;

// Now lets see about hooks
// useState
// import { useState } from "react";
// function App() {
//   const [likebox, setUpdate] = useState(0);
//   const updateMachine = () => {
//     setUpdate(likebox + 1);
//   };
//   const decreseMachine = () => {
//     if (likebox > 0) {
//       setUpdate(likebox - 1);
//     }
//   };
//   return (
//     <>
//       <h1>likes : {likebox}</h1>
//       <button onClick={updateMachine}>add like</button>
//       <button onClick={decreseMachine}>decrese like</button>
//     </>
//   );
// }
// export default App;

// complex state
// function App() {
//   const [updateBox, setUpdate] = useState({
//     like: 0,
//     dislike: 0,
//   });
//   const likeHandler = () => {
//     setUpdate({
//       ...updateBox,
//       like: updateBox.like + 1,
//     });
//   };
//   const dislikeHandler = () => {
//     setUpdate({
//       ...updateBox,
//       dislike: updateBox.dislike + 1,
//     });
//   };

//   const resetfn = () => {
//     setUpdate({
//       ...updateBox,
//       like: 0,
//       dislike: 0,
//     });
//   };
//   return (
//     <>
//       <h1>likes : {updateBox.like}</h1>
//       <h1>dislike : {updateBox.dislike}</h1>
//       <button onClick={likeHandler}>like</button>
//       <button onClick={dislikeHandler}>dislike</button>
//       <button onClick={resetfn}>reset</button>
//     </>
//   );
// }
// export default App;

// Now lets see about controlled and uncontrolled forms
// uncontrolled form - we cannot use (useState) to control the form data
// for example
// function App() {
//   const handler = (event) => {
//     event.preventDefault();
//     console.log(event.target.email.value);
//     console.log(event.target.password.value);
//   };
//   return (
//     <>
//       <h1>LogIn forms</h1>
//       <form onSubmit={handler}>
//         <input type="email" placeholder="type your email" name="email" />
//         <input
//           type="password"
//           placeholder="enter your password"
//           name="password"
//         />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }
// export default App;

// Now lets see about controlled forms using useState
// import { useState } from "react";
// function App() {
//   const [emailbox, setemail] = useState("");
//   const [passwordbox, setpassword] = useState("");
//   const handler = (event) => {
//     event.preventDefault();
//     console.log(emailbox);
//     console.log(passwordbox);
//   };
//   return (
//     <>
//       <h1>LogIn forms</h1>
//       <form onSubmit={handler} id="form">
//         <input
//           type="email"
//           placeholder="enter your email"
//           name="email"
//           value={emailbox}
//           onChange={(event) => {
//             setemail(event.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="enter your password"
//           name="password"
//           value={passwordbox}
//           onChange={(event) => {
//             setpassword(event.target.value);
//           }}
//         />

//       </form><button form="form">Submit</button>
//     </>
//   );
// }
// export default App;

// Now lets see about list rendering
// each list should have unique key (set key = {index} inside list)
// function App() {
//   const menu = ["mango", "banana", "grapes", "orange"];
//   const listbox = [];
//   menu.map((index) => {
//     listbox.push(<li key={index}>{index}</li>);
//   });
//   return (
//     <>
//       <h1>Receipes</h1>
//       <ul>{listbox}</ul>
//     </>
//   );
// }
// export default App;

// Now lets see about useEffect
// If the components re-render the useEffect function will run based on dependiencies
// [] - runs only once
// [box] - whenever the box changes the useEffect runs
// import { useEffect, useState } from "react";
// function App() {
//   const [box, setBox] = useState(0);
//   const handler = () => {
//     setBox(box + 1);
//   };

//   useEffect(() => {
//     console.log("box updated");
//   }, []);
//   return (
//     <>
//       <h1>api call</h1>
//       <button onClick={handler}>click me</button>
//     </>
//   );
// }
// export default App;

// Now lets see about useReducer
// same as useState but useReducer for complex state
// import { useReducer } from "react";
// function App() {
//   const machine = (state, action) => {
//     switch (action) {
//       case "like":
//         return state + 1;
//         break;
//       case "dislike":
//         return state > 0 ? state - 1 : 0;
//       default:
//         return state;
//     }
//   };
//   const [likebox, setbox] = useReducer(machine, 0);

//   return (
//     <>
//       <h1>Likes : {likebox}</h1>
//       <button
//         onClick={() => {
//           setbox("like");
//         }}
//       >
//         Like me
//       </button>
//       <button
//         onClick={() => {
//           setbox("dislike");
//         }}
//       >
//         Dislike me
//       </button>
//     </>
//   );
// }
// export default App;

// Now lets see about useRef
// useRef its like a variable
// let see the differents between normal variable and state variables
// and we see the differents between them

// normal variable
// function App() {
//   let likes = 0;
//   const handler = () => {
//     likes = likes + 1;
//     console.log(likes);
//   };
//   return (
//     <>
//       <h1>Likes : {likes}</h1>
//       <button
//         onClick={handler}
//       >
//         Inc
//       </button>
//     </>
//   );
// }
// export default App;

// actually likes are incresing but its not updating the component
// if component re-render the normal variable gets reset to 0
// lets see

// function App() {
//   let like = 0;
//   const [likebox, setLike] = useState(true);
//   const handler = () => {
//     like = like + 1;
//     console.log(like)
//   };
//   console.log(likebox)
//   return (
//     <>
//       <h1>likes : {like}</h1>
//       <button onClick={handler}>inc</button>
//       <button
//         onClick={() => {
//           setLike(!likebox);
//         }}
//       >
//         re-render
//       </button>
//     </>
//   );
// }
// export default App;

// But it is a state value its not reset
// the componet re - render the state value will continues where its left
// function App() {
//   const [likebox, setLike] = useState(0);
//   const [box, setBox] = useState(true);
//   useEffect(() => {
//     console.log(likebox);
//     console.log(`current state is ${box}`);
//   }, [box]);

//   return (
//     <>
//       <h1>Likes : {likebox}</h1>
//       <button onClick={() => {setLike(likebox + 1)}}>Inc</button>
//       <button onClick={() => {setBox(!box)}}>Re - render</button>
//     </>
//   );
// }
// export default App;

// now what the use of useRef variable
// in normal variable if components get re-render the normal variable gets reset to 0
// but in useRef variable if the component gets re-render the value will continues
// component re-render the updated value will show
// lets see an example
// import { useEffect, useRef, useState } from "react";

// function App() {
//   let count = useRef(0); //inorder to access the count use .current
//   const [initial, setInitial] = useState(true);
//   const handler = () => {
//     count.current = count.current + 1;
//     console.log(count.current);
//   };
//   return (
//     <>
//       <h1>Likes : {count.current}</h1>
//       <button
//         onClick={handler}
//       >
//         Inc
//       </button>
//       <button
//         onClick={() => {
//           setInitial(!initial);
//         }}
//       >
//         Re-render
//       </button>
//     </>
//   );
// }
// export default App;
// We can map to input to useRef ref{variable name}

// Now lets see about React router
// Installation
// React router .com - latest version 7
// npm install  react-router@latest

//  And create a router
import { createBrowserRouter, RouterProvider } from "react-router";
const router1 = createBrowserRouter([
  // each route as an object
  {
    path: "/", // this represents localhost : 5173/
    element: <h1>hello world !</h1>,
  },
  {
    path: "code-kata",
    element: <h1>this is code-kata page</h1>,
  },
  {
    path: "sql-kata",
    element: <h1>this is sql-kata page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router1} />;
}
export default App;
