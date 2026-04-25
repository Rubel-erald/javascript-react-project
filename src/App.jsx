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
// class App1 extends React.Component {
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
// export default App1;


// creating variables inside components

function Variables (){
  let fname = "rubel";
  let age = 23;
  return <>
  <h1>Hello {fname} your age is {age}</h1>
  </>
}
export default Variables;
