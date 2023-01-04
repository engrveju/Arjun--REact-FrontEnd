import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();

    const {userId}= useParams();

    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        gender:"",
        email:"",
        password:""
    })

    const{firstName,lastName,gender,email,password}=user;

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/user/${userId}`);
        console.log(result.data+" Jesus")
        setUser(result.data);
      };

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
      }, [])
  
    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/user/edit/${userId}`,user)
        navigate("/")
    }

    

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <div className="mb-3">
                    <form className="row g-3" onSubmit={(e)=>{onSubmit(e)}}>
                        <div className="col-md-12">
                            <label htmlFor="firstName" className="form-label">FirstName</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="firstName" 
                                    value={firstName}
                                    onChange={(e)=>onInputChange(e)}
                                />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="lastName" className="form-label">LastName</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="lastName" 
                                    value={lastName} 
                                    onChange={(e)=>onInputChange(e)}
                                />
                        </div>
                        
                        
                        <div className="col-md-7">
                            <label htmlFor="gender" className="form-label">Edit Gender</label>
                                <select 
                                    name="gender" 
                                    className="form-select" 
                                    value={gender} 
                                    onChange={(e)=>onInputChange(e)}
                                >
                                    <option selected>Choose...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Don't say">Don't Say</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label" >E-mail</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    placeholder="abc@mail.com" 
                                    value={email} 
                                    onChange={(e)=>onInputChange(e)}
                                />
                        </div>
                        
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    placeholder="*******" 
                                    value={password} 
                                    onChange={(e)=>onInputChange(e)}
                                />
                        </div>

                        <div className="col-md-12">
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    name="gridCheck"  
                                />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Accept Terms and Conditions
                            </label>
                            </div>
                                </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button className="btn btn-primary me-md-2" type="submit">Submit</button>
                                <Link className="btn btn-danger" type="submit" to="/">Cancel</Link>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditUser;