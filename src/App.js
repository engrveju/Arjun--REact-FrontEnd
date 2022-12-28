
import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';

function App() {
  
    const [role, setRole] = useState("Engineer");
    const [employees, setEmployee] = useState([
      {name:"Chike",role:"Rider",id: 1},
      {name:"Chike",role:"Rider",id: 2},
      {name:"Chike",role:"Rider",id: 3},
      {name:"Chike",role:"Rider",id: 4},
      {name:"Chike",role:"Rider",id: 5},
      {name:"Chike",role:"Rider",id: 6}]
      )
      function updateEmployee(id, newName, newRole){
        console.log(id+ newName + newRole)
      }
console.log(role+setEmployee)
console.log(employees)

      const showEmployees =true;
  return (
      <div className ="App bg-red-300">
        {showEmployees ? (
          <>
            <input
              type="text"
              onChange={(e)=>{
                setRole(e.target.value);
              }}
            />
      
              <div className="flex flex-wrap justify-center">
              {employees.map((employ)=>{
                 return (
                  <Employee 
                  key={employ.id}
                  id ={employ.id}
                  name={employ.name} 
                  role={employ.role}
                  updateEmployee ={updateEmployee}
                  />

                 )
                
              })}
              </div>
    </>
  ):(
      <p>No Employees available</p>
  )}
      </div>
);
}

export default App;
