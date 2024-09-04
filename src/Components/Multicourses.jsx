import { Link } from "react-router-dom";

const MultiCourses=()=>{
    return <div>
        <h2>Multidisciplinary Courses</h2>
        <p>The National Education Policy (NEP) 2020 of India emphasizes a multidisciplinary approach to education, aiming to break down the rigid boundaries between traditional academic disciplines. According to NEP 2020, multidisciplinary courses are designed to integrate knowledge from various fields and encourage students to take courses across different disciplines.</p> 
        <div>
        Here’s a brief overview of the key aspects:
        <li><strong>Holistic Education: </strong>NEP 2020 advocates for a broad-based education system where students are not confined to a single field of study but can explore subjects from multiple disciplines. This approach is intended to provide a more well-rounded education and better prepare students for complex, real-world problems.</li>    
        <li><strong>Flexibility: </strong>The policy promotes flexibility in the curriculum, allowing students to choose courses from different departments or faculties. For example, a student pursuing engineering might also take courses in humanities, social sciences, or arts.</li>
        <li><strong>Credit Transfer System: </strong>NEP 2020 supports the establishment of credit transfer systems, making it easier for students to switch between different programs or institutions while carrying forward credits earned in previous courses.</li>
        <li><strong>Integrated Learning: </strong>By fostering an environment where different subjects can be interlinked, multidisciplinary courses aim to enhance students’ critical thinking, problem-solving abilities, and creativity.</li>
        <li><strong>Skill Development: </strong>The policy emphasizes the development of various skills—both technical and soft skills—through a diverse curriculum, making graduates more versatile and adaptable to various careers.</li>
        </div>
        <h2>List of Multidisciplinary Courses </h2>
        <h3>Offered by different universities</h3>
        <a href="https://nep.puchd.ac.in/mdc.pdf">Pubjab University</a><br/>
        <Link to={"/multicourses/iitkanpur"}>IIT Kanpur</Link><br/>
        <Link to={"/multicourses/otheriits"}>Other IITs</Link>
    </div>
}

export default MultiCourses;