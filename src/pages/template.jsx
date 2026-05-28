import { useLoaderData } from "react-router";
function Template() {
  const thatdata = useLoaderData();

  return (
    <>
      <h1>hello</h1>
      <p>{thatdata.title}</p>
      <p>{thatdata.price}</p>
    </>
  );
}
export default Template;
