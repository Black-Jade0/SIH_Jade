import axios from "axios";
import { useEffect, useState } from "react";

const Titlecard=(props)=>{
    //resize the image ? 
   
    return (
        <>
        <li className="w-1/4 border border-black rounded-md m-3 flex flex-col">
            <div className="flex justify-center">
            <img src={props.item.image||"https://www.shutterstock.com/shutterstock/photos/2509001103/display_1500/stock-photo-indoor-photo-of-a-multi-cultural-high-school-student-working-in-a-career-technical-classroom-2509001103.jpg"}
            className="aspect-auto px-4 py-2 rounded-lg my-2" alt="logo"  />
            </div>
            <li className="m-1 text-lg font-bold">{props.item.name}</li>
            <li className="m-2 text-lg">{props.item.description}</li>
            <li className="m-1">{`Vist the site here: `}<a className="underline text-blue-500" href={props.item.link}>{props.item.name}</a></li>
            </li>
        </>
    )
}

export default Titlecard;