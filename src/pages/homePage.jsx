import { Link } from "react-router";
function Homepage() {
  return(<>
   <h1>Home Page</h1>
<h1><Link to={`/login`}>login</Link></h1>
  </>)
}
export default Homepage;
