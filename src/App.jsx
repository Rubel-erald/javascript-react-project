// creating components
// there are 2 types of components
// 1.functional components
// 2.class components
// const { useState } = require("react");

import { useFormState } from "react-dom";

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

// useState
// function App(){
//     const [likes,setlikes] = useState(0);

//     const handleLike = () => {
//         setlikes(likes + 1)
//     }
//     return (<>
//     <h1>likes : {likes}</h1>
//     <button onClick={}>click me</button>
//     </>)
// }

// function App() {
//   const [box, update] = useState(0);
//   const machine = () => {
//     update(100 + 1);
//     console.log(box);
//   };
//   return (
//     <>
//       <h1>likes : {box}</h1>
//       <button onClick={machine}>like the button</button>
//     </>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const state = useState(0);

//   const likes = state[0];
//   const setLikes = state[1];

//   return (
//     <>
//       <h1>{likes}</h1>

//       <button onClick={() => setLikes(likes + 1)}>
//         Like 👍
//       </button>
//     </>
//   );
// }

// assignment
// import { useState } from "react";
// function App() {
//   const [box, setlike] = useState(0);
//    console.log(box);
//   const like = () => {
//     setlike(box + 1);
//   };
//   const disLike = () => {
//     if (box >= 2) {
//       setlike(box - 1);
//     }

//   };
//   return (
//     <>
//       <h1>likes : {box}</h1>
//       <button onClick={like}>Like</button>
//       <button onClick={disLike}>Dislike</button>
//     </>
//   );
// }
// export default App;

// multiple state example

// import { useState } from "react";
// function App() {
//   const [likes, setLikes] = useState(0);
//   const [dislike, setdislike] = useState(0);
//   const updatelike = () => {
//     setLikes(likes + 1);
//   };
//   const updatedislike = () => {
//     setdislike(dislike + 1);
//   };

//   return (
//     <>
//       <h1>Likes : {likes}</h1>
//       <h1>Dislike : {dislike}</h1>

//       <button onClick={updatelike}>
//         <span className="material-symbols-outlined">thumb_up</span>
//       </button>

//       <button onClick={updatedislike}>
//         <span className="material-symbols-outlined">thumb_down</span>
//       </button>
//     </>
//   );
// }
// export default App;

// complex state
// import { useState } from "react";
// function App() {
//   const [reaction, setupdates] = useState({
//     likes: 0,
//     dislike: 0,
//   });

//   const likeHandler = () => {
//     setupdates({
//       ...reaction,
//       likes: reaction.likes + 1,
//     });
//   };

//   const dislikeHandler = () => {
//     setupdates({
//       ...reaction,
//       dislike: reaction.dislike + 1,
//     });
//   };

//   return (
//     <>
//       <h1>Likes : {reaction.likes}</h1>
//       <h1>Dislike : {reaction.dislike}</h1>
//       <button onClick={likeHandler}>
//         <span className="material-symbols-outlined">thumb_up</span>
//       </button>
//       <button onClick={dislikeHandler}>
//         <span className="material-symbols-outlined">thumb_down</span>
//       </button>
//     </>
//   );
// }
// export default App;

// example rework
// import { useState } from "react";
// function App() {
//   const [box, setBox] = useState(0);
//   const update = () => {
//     setBox(box + 1);
//   };
//   const dislikeUpdate = () => {
//     if(box > 0){
//         setBox(box - 1);
//     }
//   };

//   return (
//     <>
//       <h1>Likes : {box} </h1>
//       <button onClick={update}>like</button>
//       <button onClick={dislikeUpdate}>dislike</button>
//     </>
//   );
// }
// export default App;

// import { useState } from "react";
// function App() {

//     const [box , setUpdates] = useState({
//         like : 0,
//         dislike : 0
//     })

//     const likeHandler = () => {
//         setUpdates({
//             ...box,
//             like : box.like + 1
//         })
//     }

//     const dislikeHandler = () => {
//         setUpdates({
//             ...box,
//             dislike : box.dislike + 1
//         })
//     }
//   return (
//     <>
//       <h1>likes : {box.like}</h1>
//       <h1>dislike : {box.dislike}</h1>
//       <button onClick={likeHandler}>like</button>
//       <button onClick={dislikeHandler}>dislike</button>
//     </>
//   );
// }
// export default App;

// forms - uncontrolled forms we cannot usestate to forms 
function App() {
  const handler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(e.target.rubel.value);  //target = form and rubel means that input name and value means inside the rubel has rubelerald@gmail.com
    console.log(e.target.erald.value) //123
  };
  return (
    <>
      <h1>Log in form</h1>
      <form onSubmit={handler}>
        <div>
          <input type="email" placeholder="email..." name="rubel" />
        </div>

        <div>
          <input type="password" placeholder="password..." name="erald" />
        </div>
        <button>login</button>
      </form>
    </>
  );
}
export default App;
