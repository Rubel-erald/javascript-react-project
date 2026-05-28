import { useLoaderData } from "react-router";
function Template() {
  const thatData = useLoaderData()
  return (
    <>
      <h1>hello</h1>
      <p>{thatData.title}</p>
      <p>{thatData.price}</p>
    </>
  );
}
export default Template;
