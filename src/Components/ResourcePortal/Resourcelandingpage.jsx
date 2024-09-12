import { Link } from "react-router-dom";

const Resourcelandingpage=()=>{
    return <div>
        <div className="flex m-2">
        <button className="m-1">Career Guides</button>
        <button className="m-1">Educational Pathways</button>
        <button className="m-1">Study Materials</button>
        <button className="m-1">Skills and Certifications</button>
        <button className="m-1">Career Development Tools</button>
        </div>
        <Link to={'/search'}>Search</Link>
    </div>
}

export default Resourcelandingpage;