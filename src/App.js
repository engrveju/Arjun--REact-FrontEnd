
// import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';

function App() {


  return (
   <div className ="App bg-red-300">
  
    <div className="flex flex-wrap justify-center">
      <Employee name="John2" role="CTO"/>
      <Employee name="Val" role="client"/>
      <Employee  name="Peter" role="developer"/>
      <Employee  name="Emma" role="Owner"/>
      <Employee  name="Blessing" role="Banker"/>
      <Employee name="James" role="Groil"/>
      </div>
   </div>
);
}

export default App;
