// import { setlike , setdislike } from "./redux/counterSlice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

// function App() {
//   const fn = useDispatch()
//   const likeBox = useSelector((state) => state.rubel.likes)
//   const dislikeBox = useSelector((state) => state.rubel.dislike)
//   return (
//     <>
//       <h1>Likes : {likeBox}</h1>
//       <h1>Dislikes : {dislikeBox}</h1>
//       <button onClick={() => {fn(setlike())}}>like</button> <button onClick={() => {fn(setdislike())}}>dislike</button>

//     </>
//   );
// }
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setNotes } from "./redux/counterSlice";
import axios from "axios";
import instance from "../instance/instance";
function App() {
  const func = useDispatch();
  const notess = useSelector((state) => state.rubel.notes);

  useEffect(() => {
    instance
      .get("/notes")
      .then((res) => func(setNotes(res.data)));
  }, []);
  console.log(notess);
  return (<>
  <ul>{notess.map((items) => <li key={items.id}>{items.name}</li>)}</ul>
  </>)
}
export default App;
