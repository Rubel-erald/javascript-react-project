import { useLoaderData } from "react-router";
import { Link } from "react-router";
function LoginPage() {
  const rubel = useLoaderData()
  return (<>
  <h1>Products</h1>
  <ul>
    {rubel.map((erald) => <li key={erald.title}><Link to={`/login/${erald.id}`}>{erald.title}</Link></li>)}
  </ul>
  </>)
}
export default LoginPage;
