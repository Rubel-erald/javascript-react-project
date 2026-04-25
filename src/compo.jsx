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
    return <>
    <h1>hello {this.props.a} you are {this.props.b} years old and you are from {this.props.c}</h1>
    </>;
  }
}
export default Header;