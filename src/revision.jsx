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
function App() {
  const menu = ["mango", "banana", "grapes", "orange"];
  const listbox = [];
  menu.map((index) => {
    listbox.push(<li key={index}>{index}</li>);
  });
  return (
    <>
      <h1>Receipes</h1>
      <ul>{listbox}</ul>
    </>
  );
}
export default App;
