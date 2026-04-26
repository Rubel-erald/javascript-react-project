// creating components
// there are 2 types of components
// 1.functional components
// 2.class components

// 1.functional components

// function App (){
//   return <>
//   <h1>hello world !</h1>
//   <p>hi i am rubel erald</p>
//   </>
// }

// export default App;

// // 2.class components
// import React from "react";
// class App extends React.Component{
//     render() {
//         return <>
//         <h1>hello world !</h1>
//         <p>hi i am rubel erald</p>
//         </>
//     }

// }
// export default App;

// 3.creating multiple component
// import React from "react";
// import Header from "./compo";
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

// creating variables inside components

// function Variables (){
//   let fname = "rubel";
//   let age = 23;
//   return <>
//   <h1>Hello {fname} your age is {age}</h1>
//   </>
// }
// export default Variables;

// passing variables parent components to child components
// import Header from "./compo";
// function Variables() {
//   let name = "rubel";
//   let age = 23;
//   let place = "coimbatore";

//   return (
//     <>
//       <Header x={name} y={age} z={place} />
//     </>
//   );
// }
// export default Variables;

// lets see in class components
// import Header from "./compo";
// import React from "react";

// class Variables extends React.Component {
//   render() {
//     let name = "rubel";
//     let age = 23;
//     let place = "coimbatore";
//     return (
//       <>
//         <Header a={name} b={age} c={place} />
//       </>
//     );
//   }
// }
// export default Variables;

// Child to parent passing variables using props
// parent component

// function App (){
//     return (<>
//     <h1>hello rubel</h1>
//     </>)
// }

// import React from "react";
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>erald !</h1>
//       </>
//     );
//   }
// }

// import Header from "./compo";
// function App() {
//   return (
//     <>
//       <Header />
//     </>
//   );
// }

// import React from "react";
// import Header from "./compo";
// class App extends React.Component{
//     render(){
//         return(<>
//         <Header />
//         </>)
//     }
// }

// function App(){
//     let name = "rubel";
//     let age = 23;
//     let place = "coimbatore";

//     return(<>
//     <h1>hello {name} your age is {age} and you are from {place}</h1>
//     </>)
// }

// class App extends React.Component {
//   render() {
//     let name = "rubel";
//     let age = 23;
//     let place = "coimbatore";

//     return (
//       <>
//         <h1>
//           hello {name} your age is {age} and your are from {place}
//         </h1>
//       </>
//     );
//   }
// // }
// import Header from "./compo";
// import React from "react";
// function App() {
//   let name = "rubel";
//   let age = 23;
//   let place = "coimbatore";

//   return(<>
//   <Header name={name} age={age} place={place}/>
//   </>)
// }

// class App extends React.Component {
//   render() {
//     let name = "rubel";
//     let age = 23;
//     let place = "coimbatore";

//     return (
//       <>
//         <Header name={name} age={age} place={place} />
//       </>
//     );
//   }
// }

// import Header from "./compo";
// function App() {
//   const fn = (name, age, place) => {
//     console.log(
//       `hello ${name} you are ${age} years old and you are from ${place}`,
//     );
//   };
//   return (
//     <>
//       <Header fn={fn} />
//     </>
//   );
// }
// export default App;
