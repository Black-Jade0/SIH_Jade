import { useEffect, useState } from 'react';
import { CohereClient } from 'cohere-ai';
import DOMPurify from 'dompurify';
const Quizapicall=({ subjects,differenetsub })=>{
//How to format received content from api

const cohere = new CohereClient({
  token: 'IA9vNMfHYZhBHoD3GJiqCz3BmeJWZzDgWT8AcuxR',
});

const [text,setText]=useState("")
const [flag,setFlag]=useState(false);

useEffect(()=>{
    
    (async () => {
        const questionsString = differenetsub.map((item) => item.queasked).join(', ');
        const answersString = differenetsub.map((item) => item.answer).join(', ');
      const messageToSend = `I am giving you certain responses about a student, recommend him/her career options. The responses includes marks on a certain test: Maths=${subjects.maths}, Arts=${subjects.arts}, Science=${subjects.science}. These are out of 20 in each subject. Additional questions which tell about the user are given first all the questions are given then all the answer are given respectively : questions: ${questionsString}, user's answers: ${answersString}, give response in html format and don't say like here is your html response in the final response as i am putting the final response on my page without any change so just answer the query`;
        const response = await cohere.chat({
          message: messageToSend,
        });
        const sanitizedText = DOMPurify.sanitize(response.text);
        setText(sanitizedText)
        setFlag(true)
        console.log("The response is :",sanitizedText)
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
