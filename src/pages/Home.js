import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
        // let navigate = useNavigate();
           // eslint-disable-next-line
        const {userId}= useParams();

        const[users, setUsers] = useState([]);

        useEffect(()=>{
            loadUser();
        },[])

        const loadUser = async () =>{
            const result = await axios.get("http://localhost:8080/api/v1/user/all_users")
            console.log(result.data)
            setUsers(result.data);
        }

        const handleDelete = async (userId) =>{
           await axios.delete(`http://localhost:8080/api/v1/user/delete/${userId}`)
          loadUser();
        }

    return ( 
        <div className="container">
            <div className="py-4">
            <table className="table border shadow table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map((user,index)=>(
    <tr>
      <th scope="row" key={user.userId}>{index+1}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td> 
        <button type="button" className="btn btn-primary ">View</button>
        <Link type="button" className="btn btn-success mx-2"
          to={`/editUser/${user.userId}`}
        >Edit</Link>
        <button type="button" className="btn btn-danger mx-2"
        onClick={()=>{handleDelete(user.userId)}}>Delete</button>
      </td>
    </tr>
    ))}
    
  </tbody>
</table>
            </div>
        </div>
     );
}
 
export default Home;