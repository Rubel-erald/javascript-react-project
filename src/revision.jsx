import React from "react";
import Header from "./revison-component";
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

