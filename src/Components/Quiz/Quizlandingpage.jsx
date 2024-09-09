import { useEffect, useState } from "react";
import { questions } from "./questions";


const Quizlandinpage = () => {
  const [response, setResponse] = useState([]);
  
  const handleInputChange = (e, id,type) => {
    setResponse((prevResponse) => {
      const existingResponseIndex = prevResponse.findIndex(
        (res) => res.id === id
      );
      if (existingResponseIndex >= 0) {
        // Update existing response
        const updatedResponses = [...prevResponse];
        updatedResponses[existingResponseIndex].answer = e.target.value;
        return updatedResponses;
      } else {

        // Add new response with new ID
        return [...prevResponse, { id:id, answer: e.target.value, marks:0,type:type }];

      }
    });
  };
  const [subjects,setSubjects]=useState({
    maths:0,
    arts:0,
    physicaleducation:0,
    science:0
  })
  const [differenetsub,setDifferentSub]=useState([])
  const handleClick=async ()=>{
    //allot marks to right answers
    
    response.map((item)=>{
        if((item.answer).toString()===questions[item.id-1].Answer){
            item.marks=questions[item.id-1].marks;
        }
        
    })
  
     calculateresponse();
    
  }
  function calculateresponse(){
    response.forEach((item) => {
        if (item.type === "Mathematics/Academics") {
          setSubjects((prevSubjects) => ({
            ...prevSubjects,
            maths: prevSubjects.maths + item.marks,
          }));
        } else if (item.type === "Science/Academics") {
          setSubjects((prevSubjects) => ({
            ...prevSubjects,
            science: prevSubjects.science + item.marks,
          }));
        } else if (item.type === "Arts/Academics") {
          setSubjects((prevSubjects) => ({
            ...prevSubjects,
            arts: prevSubjects.arts + item.marks,
          }));
        } else if (item.type === "PhysicalEducation/Academics") {
          setSubjects((prevSubjects) => ({
            ...prevSubjects,
            physicaleducation: prevSubjects.physicaleducation + item.marks,
          }));
        } else if (item.type === "Intrest based") {
            // Update differenetsub state
            setDifferentSub((prevResponse) => {
              const existingResponseIndex = prevResponse.findIndex(
                (res) => res.id === item.id
              );
        
              if (existingResponseIndex >= 0) {
                // Update existing response
                const updatedResponses = [...prevResponse];
                updatedResponses[existingResponseIndex].answer = item.answer;
                
                return updatedResponses;
              } else {
                // Add new response
                const newResponse = [...prevResponse, { id: item.id, answer: item.answer, marks: 100 }];
                
                return newResponse;
              }
          });
        }
      });
  }
  useEffect(() => {
    //yahan pe updated state variables hai jo send karne hai backend for storing data!kk
    console.log("Marks obtained: ",subjects)
    console.log("Custom responses: ", differenetsub);
  }, [differenetsub,subjects]);
  return (
    <div>
      <h2>Acadmeics</h2>
      {questions.map((item) => {
        return (
          <>
            Type:{item.type}
            <br />
            Question:{item.Question}
            <br />
            <input
              onChange={(e) => {
                handleInputChange(e, item.id,item.type);
              }}
            ></input>
            <br />
          </>
        );
      })}
      <button onClick={handleClick}>Submit</button>
    </div>
    
  );
};

export default Quizlandinpage;
