import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moreinfo from './Moreinfo';
import { BACKENDBASEURL } from "../config"

const MoreinfoPage = () => {
  const { code } = useParams(); // Retrieve the code from the URL
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchMoreInfo() {
      const baseURL = BACKENDBASEURL+`/user/api/search/moreinfo?code=${code}`;
      try {
        const response = await axios.get(baseURL);
        setInfo(response.data); // Store the detailed info in state
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    fetchMoreInfo(); // Fetch the data when the component is mounted
  }, [code]);

  if (!info) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div>
      <h2>Career Details</h2>
      {/* Render the detailed information using the Moreinfo component */}
      <Moreinfo career={info} />
    </div>
  );
};

export default MoreinfoPage;
