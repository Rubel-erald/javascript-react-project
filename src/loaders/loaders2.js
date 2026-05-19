import axios from "axios";
async function Loaders2({ params }) {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.num}`);
  return res.data;
}
export default Loaders2;
