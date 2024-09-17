import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Questionslandingpage = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(()=>{
        async function fetchquestions (){
            try{
                const response = await axios.get('http://localhost:3000/user/questions')
                setQuestions(response.data);
                console.log(response.data)
            }catch(error){
                console.log("Got the error:",error)  
            }
        }
        fetchquestions();
    },[])
    // <Link to={`/traits/${career.code}/${res.title}`}>{res.title}</Link>
  return (
    <div>
      <form className="max-w-xl mx-auto">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full m-4 p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="What do you want to ask ?"
            required
          />
          <button
            type="submit"
            className="text-black absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-4 py-2 my-2"
          >
            Post
          </button>
        </div>
      </form>
      <div className="p-6 space-y-6 justify-center content-center grid grid-cols-3">
        {Array.isArray(questions) && questions.length > 0 ? (
          questions.map((question) => (
            <div className="border border-black rounded-md col-span-4 mx-auto content-center ">
            <div key={question.id} className="border p-4">
              <h2 className="text-xl font-bold">{question.title}</h2>
              <p>{question.content}</p>
              <p className="text-sm text-gray-500">Asked by {question.author}</p>
              <Link to={'/question/'+question.id}>Check Answers</Link>
            </div>
            </div> 
          ))
        ) : (
          <div>No questions available</div>
        )}
      </div>  
    </div>
  );
};
//On click of the div it should call a function which will change the flag and render the QuestionWithAnswer component with right props
// Make a backend route which will take param (questionid) then find that question ans render it on the QuestionwithAnswer component
export default Questionslandingpage;
