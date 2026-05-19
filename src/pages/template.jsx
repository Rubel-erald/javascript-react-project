import { useLoaderData } from "react-router";
export const Template = () => {

  const load = useLoaderData()
  return (<>
  <h1>Template page</h1>
  <h1>Products {load.title}</h1>
  </>);
};
