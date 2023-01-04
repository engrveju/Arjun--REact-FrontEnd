import Navbar from './layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';

const App = () => {
  return (  
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route exact path="/addUser" element ={<AddUser />}/>
          <Route exact path="/editUser/:userId" element ={<EditUser />}/>
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
