import { useEffect, useState } from 'react';
import { CohereClient } from 'cohere-ai';
const Quizapicall=({ subjects,differenetsub })=>{

const cohere = new CohereClient({
  token: 'IA9vNMfHYZhBHoD3GJiqCz3BmeJWZzDgWT8AcuxR',
});
const [text,setText]=useState("")
const [flag,setFlag]=useState(false);
useEffect(()=>{
    //How to send multiple questions !
    //I am using the map function once i see the output then i can think about how can i do it!
    (async () => {
        const questionsString = differenetsub.map((item) => item.queasked).join(', ');
        const answersString = differenetsub.map((item) => item.answer).join(', ');
      const messageToSend = `I am giving you certain responses of a student to recommend him/her career options. The response includes marks on a certain test: Maths=${subjects.maths}, Arts=${subjects.arts}, Science=${subjects.science}. These are out of 20 in each subject. Additional questions which tell about the user are given first all the questions are given then all the answer are given respectively : questions: ${questionsString}, user's answers: ${answersString}`;
      console.log("The message to be sent: ", messageToSend);
        const response = await cohere.chat({
          message: messageToSend,
        });
        setText(response.text)
        setFlag(true)
        console.log("The response is :",response)
      })
      ();
},[])
    if(flag){
        return<div>
            <p>{text}</p>
        </div>
    }
    return <div>
        <p>Waiting for response</p>
    </div>
}

export default Quizapicall;
