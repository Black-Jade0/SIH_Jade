import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKENDBASEURL } from "../../config";
import axios from "axios";
const QuestionwithAnswerpage = ()=>{
        const { queid } = useParams();
    const [recquestion,setRecQuestion] = useState(null);
    const [answerContent, setAnswerContent] = useState('');
    const [recanswers,setRecAnswer] = useState([]);
    const [flag,setFlag] = useState(false);
    const [flag2,setFlag2] = useState(false);
    //ye user answer mai hona chaiye ki type kya hai {type=="mentor"?<img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" className="size-5 mx-2 mt-3"/>:null} 
    useEffect(()=>{
        //fetching the particular question for which the user clicked in question landing page
        console.log(queid)
        async function fetchquestion() {
            const resq = await axios.get(BACKENDBASEURL+'/user/sp/question',
                {
                    params:{
                        id:queid
                    }
                }
            )
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
                    params:{
                        questionId:queid
                    }
                }
            )
            const answers = Array.isArray(resa.data) ? resa.data : [resa.data];
            
            setRecAnswer(answers)
        }
        fetchanswer();
    },[queid,flag])
    //In submitting the answer we have to send the author name for that we have to decode the userId 
    //then fetch the author name from database
    const author = "usertest";
    const type=localStorage.getItem("type")
    const submitAnswer = async (e) => {
        //Submitting the user answer
        e.preventDefault();
        if(answerContent.trim()){
            try{
                
            const resans = await axios.post(BACKENDBASEURL+`/${type}/answers`,{
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
            }else{
                window.alert("Error while submission !");
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
        <div className=" justify-center">
        <div className="m-6">
        <h2 className="text-2xl font-bold">{recquestion.title}</h2>
        <p className="text-lg font-semibold">{recquestion.content}</p>
        <p className="text-md text-blue-500">Asked by {recquestion.author}</p>
        </div>
        
        {
        Array.isArray(recanswers) && recanswers.length > 0 ? (
          recanswers.map((recanswers) => (
            <div className="border border-black rounded-md max-w-6xl mx-auto m-2 ">
            <div key={recanswers.id} className="border p-4">
              <p className="text-xl">{recanswers.content}</p>
              <div className="flex justify-end">
              <h2 className="text-md mt-2 text-blue-500 pt-2 flex justify-end font-semibold">Answered by {recanswers.author}</h2>
              </div>
            </div>
            </div>
          ))
        ) : (
          <div>No Answers available</div>
        )}
        </div>
        <br/>
        <h1 className="text-xl">Write An Answer For This Question</h1>
        <div>
        <textarea
        value={answerContent}
        onChange={(e) => setAnswerContent(e.target.value)}
        className="w-50 mt-6 border p-2"
        placeholder="Your answer"
      ></textarea>
      <br/>
      <button onClick={submitAnswer} className="bg-blue-500 hover:bg-indigo-500 hover:scale-105 text-lg font-semibold text-white mt-2 px-4 py-2 rounded">
        Submit Answer
      </button>
        </div>
        
    </div>
}
export default QuestionwithAnswerpage;