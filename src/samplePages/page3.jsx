import { useContext } from "react"
import { Data } from "../revision";
const Page3 = () => {
    const Mess = useContext(Data)
  return (<>
  <h1>holo {Mess}</h1>
  </>)
};

export default Page3;
