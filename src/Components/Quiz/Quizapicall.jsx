import { useEffect, useState } from 'react';
import { CohereClient } from 'cohere-ai';
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
      const messageToSend = `I am giving you certain responses about a student, recommend him/her career options. The responses includes marks on a certain test: Maths=${subjects.maths}, Arts=${subjects.arts}, Science=${subjects.science}. These are out of 20 in each subject. Additional questions which tell about the user are given first all the questions are given then all the answer are given respectively : questions: ${questionsString}, user's answers: ${answersString}, return the response in a manner so that it can be directly get rendered on the web-page`;
      console.log("The message to be sent: ", messageToSend);
        const response = await cohere.chat({
          message: messageToSend,
        });
        setText(response.text)
        setFlag(true)
        console.log("The response is :",response.text)
      })
      ();
},[])
    if(flag){
        return<div>
            {text}
        </div>
    }
    return <div>
        <p>Waiting for response</p>
    </div>
}

export default Quizapicall;
