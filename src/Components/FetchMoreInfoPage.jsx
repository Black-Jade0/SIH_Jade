import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
const FetchMoreInfoPage=()=>{
    let { code,key }=useParams();
    key=key.toLocaleLowerCase();
    const [info, setInfo] = useState(null);
    useEffect(() => {
        async function getMoreInfo() {
          const baseURL = `http://localhost:3000/user/api/search/moreinfo/res?code=${code}&key=${key}`;
          try {
            const response = await axios.get(baseURL);
            console.log("rec. data:",response.data);
            setInfo(response.data); // Store the detailed info in state
          } catch (error) {
            console.error("Error: ", error);
          }
        }

        getMoreInfo(); // Fetch the data when the component is mounted
      }, [code,key]);
      if (!info) {
        return <div>Loading...</div>; // Display loading message while fetching data
      }
      //Jitne type ke resources hai example personality technology etc un sab ke type ka return banega
      //kyonki sab different form mai data return kar rahe hai
      return (
        <div>
        <h2>Career Information</h2>
        <h3>Code: {info.code}</h3>
        <div>
          <strong>Top Interest</strong>
          <p><strong>Title:</strong> {info.top_interest.title}</p>
          <p><strong>Description:</strong> {info.top_interest.description}</p>
        </div>
      </div>
      );
}
export default FetchMoreInfoPage;