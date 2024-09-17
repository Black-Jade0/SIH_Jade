import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKENDBASEURL } from "../../config";
import axios from "axios";
const QuestionwithAnswerpage = (props)=>{
    //Now it will not be props.question now it will be question a state variable !
    //get the question id and find answer with that question id !
    //props.question.id, i am expecting an array of answer in response so we have to use the map !
    //In a component we can not put any request to backend or any api call without control statement or
    //useEffect !
    console.log("It is reaching here")
    const { queid } = useParams();
    const [recquestion,setRecQuestion] = useState(null);
    const [answerContent, setAnswerContent] = useState('');
    const [recanswers,setRecAnswer] = useState([]);
    const [flag,setFlag] = useState(false);
    const [flag2,setFlag2] = useState(false);
    useEffect(()=>{
        //fetching the particular question for which the user clicked in question landing page
        async function fetchquestion() {
            const resq = await axios.get(BACKENDBASEURL+'/user/sp/question',
                {
                    param:{
                        id:queid
                    }
                }
            )
            console.log("Got the question",resq.data)
            setRecQuestion(resq.data)
            setFlag2(true)
        }
        fetchquestion();
    },[queid])
    useEffect(()=>{
        //fetching whole array of answer
        async function fetchanswer() {
            const resa = await axios.get(BACKENDBASEURL+'/user/sp/answer',
                {
                    param:{
                        questionId:queid
                    }
                }
            )
            console.log("Got the answers",resa.data)
            setRecAnswer(resa.data)
        }
        fetchanswer();
    },[queid,flag])
    //In submitting the answer we have to send the author name for that we have to decode the userId 
    //then fetch the author name from database
    const author = "usertest";
    const submitAnswer = async (e) => {
        //Submitting the user answer
        e.preventDefault();
        if(answerContent.trim()){
            try{
            const resans = await axios.post(BACKENDBASEURL+'/user/answers',{
                content:answerContent,
                author:author,
                questionId:queid
            },{
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
              }  
              }
            )
            if(resans.status==200){
                window.alert("Answer submitted successfully");
                setFlag(!flag);
            }
        }catch(error){
            console.log("Got the error: ",error)
        }}
        
        setAnswerContent('');
      };
    if(!flag2){
        return<div>
            Loading ...
        </div>
    }
    return <div>
        <div className="flex justify-start">
        <h2 className="text-xl font-bold">{recquestion.title}</h2>
        <p>{recquestion.content}</p>
        <p className="text-sm text-gray-500">Asked by {recquestion.author}</p>
        {Array.isArray(recanswers) && recanswers.length > 0 ? (
          recanswers.map((recanswers) => (
            <div className="border border-black rounded-md col-span-4 mx-auto content-center ">
            <div key={recanswers.id} className="border p-4">
              <h2 className="text-xl font-bold">Answered by {recanswers.author}</h2>
              <p>{recanswers.content}</p>
            </div>
            </div>
          ))
        ) : (
          <div>No Answers available</div>
        )}
        </div>
        <h1>Write An Answer For This Question</h1>
        <textarea
        value={answerContent}
        onChange={(e) => setAnswerContent(e.target.value)}
        className="w-full mt-4 border p-2"
        placeholder="Your answer"
      ></textarea>
      <button onClick={submitAnswer} className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">
        Submit Answer
      </button>
    </div>
}
export default QuestionwithAnswerpage;