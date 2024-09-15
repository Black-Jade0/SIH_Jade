
import { useState } from "react";
import Mybutton from "./dropdown/Button";
import Mydropdown from "./dropdown/Dropdown";

const resources = [
    {
      name: "iDreamCareer",
      description: "iDreamCareer is one of India's leading career counseling platforms, helping students to discover career paths suited to their interests.",
      link: "https://idreamcareer.com/blog/career-options-in-science/"
    },
    {
      name: "CareerGuide",
      description: "CareerGuide provides comprehensive career guidance to students and professionals to help them make informed career decisions.",
      link: "https://www.careerguide.com/"
    },
    {
      name: "Mindler",
      description: "Mindler offers expert career guidance, career counseling, and career assessment to help students in choosing the right career path.",
      link: "https://www.mindler.com/"
    }
  ];
  
  const Careerguides = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const toggleVisibility = (item) => {
      if (selectedItem === item) {
        setIsVisible(!isVisible);
      } else {
        setSelectedItem(item);
        setIsVisible(true);
      }
    };
  
    return (
      <div>
        <ul className="w-full flex flex-row flex-wrap gap-4 justify-center my-6 px-2">
          <li className="career-item flex flex-col w-[15%] border border-black rounded-md gap-1 p-2">
            <h3 className="font-bold">Conventional</h3>
            <ul>
              <li>
                <Mybutton text="Science" onClick={() => toggleVisibility('Science')} />
                {selectedItem === 'Science' && <Mydropdown isVisible={isVisible} resources={resources} />}
              </li>
              <li>
                <Mybutton text="Technology" onClick={() => toggleVisibility('Technology')} />
                {selectedItem === 'Technology' && <Mydropdown isVisible={isVisible} resources={resources} />}
              </li>
              <li>
              <Mybutton text="Engineering" onClick={() => toggleVisibility('Engineering')} />
              {selectedItem === 'Engineering' && <Mydropdown isVisible={isVisible} resources={resources} />}
              </li>
              <li>
                <Mybutton text="Mathematics" onClick={() => toggleVisibility('Mathematics')} />
              {selectedItem === 'Mathematics' && <Mydropdown isVisible={isVisible} resources={resources} />}
              </li>
              <li>
              <Mybutton text="Medical" onClick={() => toggleVisibility('Medical')} />
              {selectedItem === 'Medical' && <Mydropdown isVisible={isVisible} resources={resources} />}
              </li>
            </ul>
          </li>
          <li className="career-item flex flex-col w-[15%] border border-black rounded-md gap-1 p-2">
            <h3 className="font-bold">Unconventional</h3>
            <ul>
              <li>A.I.</li>
              <li>Content Creator</li>
              <li>Theatre/Drama</li>
              <li>Sports</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };
  

export default Careerguides;