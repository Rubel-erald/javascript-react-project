import { useLoaderData } from "react-router";
function LoginPage() {
  const rubel = useLoaderData()
  return (<>
  <h1>Products</h1>
  <ul>
    {rubel.map((erald) => <li key={erald.title}>{erald.title}</li>)}
  </ul>
  </>)
}
export default LoginPage;
