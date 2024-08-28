import { Link } from "react-router-dom"
import{useState} from "react"

import axios from "axios";
import "./login.css"

import { useNavigate } from "react-router-dom";



const Signup = () => {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [password,setpassword ]=useState();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    <br />
   <div className="tot">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Name</label><br />
        <input type="text" className="name" required
        onChange={(e) => setname(e.target.value)}
        />
        <br />
       <label htmlFor="email">Email</label><br />
       <input type="email" className="email" placeholder="Enter Email" required
        onChange={(e) => setemail(e.target.value)}
        /><br />
       <label htmlFor="email">Password</label><br />
       <input type="password" required
        onChange={(e) => setpassword (e.target.value)}
       /><br />
       <button className="reg">Register</button><br />


        </form> 
       <h5>Already Have an Account</h5><br />
<Link to="/login"><button className="log">LOGIN</button></Link>
   </div>
   </>
  )
}

export default Signup