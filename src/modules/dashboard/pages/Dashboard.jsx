import { useEffect, useState } from "react";
import { Products } from "../components/Products";
// import { Header } from '../../../shared/components/Header'
import { getApi } from "../../../shared/services/api-client";

export const DashBoard = () => {
  let [state, setState] = useState("");
  let [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      let data = await getApi();
      console.log(data);
      setState(data);
      setTimeout(()=>{
        setLoadingState(!loadingState)
      },1000)
      
    };
    getProducts();
  }, []); // Mounting

  return (
    <div className="container">
    {loadingState == true ? <Products /> : <p>Loading</p>}
      
      {console.log(state)}
    </div>
  );
};
