import { useEffect, useState } from 'react';

import DOMPurify from 'dompurify';
import axios from "axios"
import { BACKENDBASEURL } from "../../config"
const Quizapicall=({ subjects,differenetsub })=>{


const [text,setText]=useState("")
const [flag,setFlag]=useState(false);

useEffect(()=>{
    
    (async () => {
        const questionsString = differenetsub.map((item) => item.queasked).join(', ');
        const answersString = differenetsub.map((item) => item.answer).join(', ');
        const messageToSend = `I am giving you certain responses about a student, recommend him/her career options. The responses includes marks on a certain test: Maths=${subjects.maths}, Arts=${subjects.arts}, Science=${subjects.science}. These are out of 20 in each subject. Additional questions which tell about the user are given first all the questions are given then all the answer are given respectively : questions: ${questionsString}, user's answers: ${answersString}, give response in html format and don't say like here is your html response in the final response as i am putting the final response on my page without any change so just answer the query`;
      
        const response = await axios.post(BACKENDBASEURL+'/images/cohere',{
            message: messageToSend
        })
        
        const sanitizedText = DOMPurify.sanitize(response.data.text);
        setText(sanitizedText)
        setFlag(true)
      })
      ();
},[])
    if(flag){
        return<div>
            <div
        dangerouslySetInnerHTML={{ __html: text }}  // Render sanitized HTML
      />
        </div>
    }
    return <div>
        <p>Waiting for response</p>
    </div>
}

export default Quizapicall;
