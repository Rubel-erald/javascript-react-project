import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Template = () => {
  const data1 = useParams();
  const [box, setBox] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${data1.num}`)
      .then((res) => setBox(res.data));
  }, []);
  return (<>
  <h1>Template page</h1>
  <h1>{box ? box.price : <p>loading</p>}</h1>
  </>);
};
