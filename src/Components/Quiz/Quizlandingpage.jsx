import { useEffect, useState } from "react";
import { questions } from "./questions";
import axios from "axios"
import { BACKENDBASEURL } from "../../config";
import Quizapicall from "./Quizapicall";
//Because of some reason token is getting deleted ! find the cause or use another method for auth
const Quizlandinpage = () => {
  const [response, setResponse] = useState([]);
  const [flag,setFlag]=useState(false);
  const [showQuizComponent, setShowQuizComponent] = useState(false); // State to control rendering

  const handleInputChange = (e, id,type,ques) => {
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
        return [...prevResponse, { id:id, answer: e.target.value, marks:0,type:type,queasked:ques }];

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
                const newResponse = [...prevResponse, { id: item.id, answer: item.answer, marks: 100,queasked:item.queasked }];
                
                return newResponse;
              }
          });
        }
      });
  }
  
  useEffect(() => {
    async function senddatatobackend(){
      try{
        const res=await axios.post(BACKENDBASEURL+"/user/quiz/data",{
        subjects:subjects,
        differentsubjects:differenetsub
      },{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }  
      })
      if(res.status==200){
        window.alert("Response submitted successfully !") 
        setShowQuizComponent(true); // Set the state to true to render the Quizapicall component
        //This is to reset the state variables which are storing responses becuase 
        //without reseting onclicking the submit button response is recalculated and 
        //marks gets updated !
      }else{
        subjects.setSubjects({
          maths:0,
          arts:0,
          physicaleducation:0,
          science:0
        })
        
        window.alert("Error !") 
      }
                          
    }catch(e){
        console.log("Got the Error:",e)
      }
    }
    if(flag)
    senddatatobackend();
    
    setFlag(true);
  }, [differenetsub,subjects]);
  if(showQuizComponent){
    return(
      <Quizapicall subjects={subjects} differenetsub={differenetsub} />
    )
  }
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
                handleInputChange(e, item.id,item.type,item.Question);
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
