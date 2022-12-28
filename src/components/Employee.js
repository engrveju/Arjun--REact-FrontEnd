import { useState } from "react";

import emma from "../img/emma.jpg";
import EditEmployee from "./EditEmployee";


const Employee = (props) => {
         
         // eslint-disable-next-line
         const [role,setRole] = useState(props.role);
          // eslint-disable-next-line
          const [name,setName] = useState(props.name);
          
        //  console.log(name)

  // console.log(props.name)
  return (
    <div className="py-8 m-2 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={emma} alt="Face" />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">

        <p className="text-lg text-black font-semibold">{props.name}</p>
        <p className="text-slate-500 font-medium">{role}</p>
        
      </div>
      <EditEmployee role={props.role} name={props.name}/>
  
    </div>
    
  </div>
  )
  }
export default Employee;