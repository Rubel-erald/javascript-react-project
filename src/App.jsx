import { setlike , setdislike } from "./redux/counterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const fn = useDispatch()
  const likeBox = useSelector((state) => state.rubel.likes)
  const dislikeBox = useSelector((state) => state.rubel.dislike)
  return (
    <>
      <h1>Likes : {likeBox}</h1>
      <h1>Dislikes : {dislikeBox}</h1>
      <button onClick={() => {fn(setlike())}}>like</button> <button onClick={() => {fn(setdislike())}}>dislike</button>
      
    </>
  );
}
export default App;
