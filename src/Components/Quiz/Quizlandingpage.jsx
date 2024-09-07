import { useState } from "react";
import { questions } from "./questions";


// setInfo((studentInfo) => ({
//     ...studentInfo,
//     [key]: e.target.value,
//   }))

const Quizlandinpage=()=>{
    const [response, setResponse] = useState([]);

  const handleInputChange = (e, id) => {
    setResponse((prevResponse) => {
      const existingResponseIndex = prevResponse.findIndex((res) => res.id === id);

      if (existingResponseIndex >= 0) {
        // Update existing response
        const updatedResponses = [...prevResponse];
        updatedResponses[existingResponseIndex].answer = e.target.value;
        return updatedResponses;
      } else {
        // Add new response
        return [...prevResponse, { id, answer: e.target.value, marks: "" }];
      }
      console.log("My responses: ",response);
    });
  };
    return <div>
        <h2>Acadmeics</h2>
        {questions.map((item)=>{
            return<>
            type:{item.type}<br/>
            Question:{item.Question}<br/>
            <input onChange={(e)=>{handleInputChange(e,item.id)}}></input><br/>
            </>
        })}
    </div>
}

export default Quizlandinpage;