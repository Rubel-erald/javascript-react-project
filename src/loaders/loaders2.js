// import axios from "axios";
// async function Loaders2({ params }) {
//   const data = await axios.get(
//     "https://fakestoreapi.com/products/" + params.num,
//   );
//   return data.data;
// }
// export default Loaders2;

import axios from "axios";
async function Loaders2({ request }) {
  try {
    const url = new URL(request.url).searchParams.get("id");
    const response = await axios.get("https://fakestoreapi.com/products/" + url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default Loaders2;
