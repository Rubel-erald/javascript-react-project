import axios from "axios";
async function Loaders2({ params }) {
  const data = await axios.get(
    "https://fakestoreapi.com/products/" + params.num,
  );
  return data.data;
}
export default Loaders2;
