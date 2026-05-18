import axios from "axios";
async function Loaders() {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=5"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default Loaders;
