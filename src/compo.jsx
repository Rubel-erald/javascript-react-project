// import React from "react";
// class Header extends React.Component {
//   render() {
//     return (
//       <>
//         <p>good night</p>
//       </>
//     );
//   }
// }
// export default Header;

// function Header(props) {
//   return (
//     <>
//       <h1>hello {props.x} how are you your age is {props.y} and you are from {props.z}</h1>
//     </>
//   );
// }
// export default Header;

// class components creating variables
import React from "react";
class Header extends React.Component {
  render() {
    let name = "rubel";
    let age = 23;
    let place = "coimbatore";
    return <>
    <h1>hello {name} you are {age} years old and you are from {place}</h1>
    </>;
  }
}
export default Header;