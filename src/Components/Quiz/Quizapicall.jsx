import { useEffect } from 'react';
import { CohereClient } from 'cohere-ai';
const Quizapicall=({ subjects,differenetsub })=>{

const cohere = new CohereClient({
  token: 'IA9vNMfHYZhBHoD3GJiqCz3BmeJWZzDgWT8AcuxR',
});
console.log("Hi there reaching Quizapicall components")
useEffect(()=>{
    //How to send multiple questions !
    //I am using the map function once i see the output then i can think about how can i do it!
    (async () => {
        console.log("The message to be sent: ",`I am giving you certain response of a student recommend him/her career options,
      the response include marks on a certain test: Maths=${subjects.maths},Arts:${subjects.arts},Science:${subjects.science}
      these are out of 20 in each subject, additional questions which tell about the user are:
      question:${differenetsub.map((item)=>{item.queasked})},
     user's answer:${differenetsub.map((item)=>{item.answer})}`)
    //     const response = await cohere.chat({
    //       message: `I am giving you certain response of a student recommend him/her career options,
    //   the response include marks on a certain test: Maths=${subjects.maths},Arts:${subjects.arts},Science:${subjects.science}
    //   these are out of 20 in each subject, additional questions which tell about the user are:
    //   question:${differenetsub.map((item)=>{item.queasked})},
    //  user's answer:${differenetsub.map((item)=>{item.answer})}`,
    //     });
      
    //     console.log(response.json)
      })
      ();
},[])

    return <div>
        hi there
    </div>
}

export default Quizapicall;