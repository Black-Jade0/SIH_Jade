import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BACKENDBASEURL } from "../../config";
//Right now i am redirecting the user to this page, but we can also make dialog box in which this
// component can be rendered
const Askquestion = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionContent, setQuestionContent] = useState('');
    const author="testuser 4"
    const navigate = useNavigate();
    const submitQuestion = async (e) => {
        //Submitting the Question
        console.log("Title: ",questionTitle)
        console.log("content: ",questionContent)
        e.preventDefault();
        if(questionContent.trim()&&questionTitle.trim()){
            try{
            const resans = await axios.post(BACKENDBASEURL+'/user/questions',{
                title:questionTitle,
                content:questionContent,
                author:author,
            },{
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }  
              }
            )
            if(resans.status==200){
                window.alert("Question submitted successfully");
                navigate('/questionlanding');
            }else{
                window.alert("Error while submission !");
            }
        }catch(error){
            console.log("Got the error: ",error)
        }}
        
      };
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold mt-4 text-gray-800">Ask Your Question</h2>
        <div className="flex flex-col">
          <input
            type="text"
            className="mx-auto w-[50%] px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Enter question title"
            onChange={(e)=>{setQuestionTitle(e.target.value)}}
          />
        </div>
        <div className="flex flex-col">
          <textarea
            className="mx-auto w-[50%] px-3 py-2 border rounded-md shadow-sm resize-none focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Provide details about your question"
            onChange={(e)=>{setQuestionContent(e.target.value)}}
          ></textarea>
        </div>
        <button 
        onClick={submitQuestion}
        className="bg-blue-500 hover:bg-indigo-700 text-white mx-auto w-[20%] font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-500">
          Submit Question
        </button>
      </div>
    </div>
  );
};
export default Askquestion;
