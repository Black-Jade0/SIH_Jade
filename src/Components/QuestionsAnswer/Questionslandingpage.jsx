import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
//Will have to change the db schema (need to add type field in both user and mentor) also have
//to change middleware so that it puts userId as well as type and then in sign in and sign up route
//have to add type to localstorage along with token !
const Questionslandingpage = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(()=>{
      // Fetching all the questions
        async function fetchquestions (){
            try{
                const response = await axios.get('http://localhost:3000/user/questions')
                setQuestions(response.data);
            }catch(error){
                console.log("Got the error:",error)  
            }
        }
        fetchquestions();
    },[])
    
  return (
    <div>
      
      <div className="p-6 space-y-6 justify-center content-center grid grid-cols-3">
        {Array.isArray(questions) && questions.length > 0 ? (
          questions.map((question) => (
            <div className="border border-black rounded-md col-span-4 mx-auto w-[50%] content-center ">
            <div key={question.id} className="border p-4">
              <h2 className="text-xl font-bold">{question.title}</h2>
              <p>{question.content}</p>
              <p className="text-sm text-gray-500">Asked by {question.author}</p>
              <Link to={'/question/'+question.id}>Check Answers</Link>
            </div>
            </div> 
          ))
        ) : (
          <div className="content-center border border-black p-2 col-span-4 mx-auto text-lg font-semibold justify-center ">No questions available</div>
        )}
      </div>
      <div className="text-white mx-auto hover:bg-blue-600 hover:scale-105 bg-blue-600 transition-all font-medium rounded-lg text-xl max-w-sm">
      <button type="button" className=" px-5 py-2.5 text-center inline-flex items-center me-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-8 mx-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
      <Link to='/askquestion'>Ask Question </Link>
      </button>
      </div>  
    </div>
  );
};
//On click of the div it should call a function which will change the flag and render the QuestionWithAnswer component with right props
// Make a backend route which will take param (questionid) then find that question ans render it on the QuestionwithAnswer component
export default Questionslandingpage;
