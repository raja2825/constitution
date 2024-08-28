import { Link } from "react-router-dom"
import{useState} from "react"
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
   
    const [email,setemail]=useState();
    const [password,setpassword ]=useState();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Sucess"){
            navigate('/profile')
            }
            else{
              {  alert("incorrect EMAIL or PASSWORD")}
            }
        })
        .catch(err=>console.log(err))
    }
  return (
   <div className="tot">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      
       <label htmlFor="email">Email</label><br />
       <input type="email" className="email" placeholder="Enter Email"  required
        onChange={(e) => setemail(e.target.value)}
        /><br />
       <label htmlFor="email">Password</label><br />
       <input type="password" required
        onChange={(e) => setpassword (e.target.value)}
       /><br />
       <button className="login">LOGIN</button><br />
       <h5>DONT Have an Account</h5><br />


        </form> 
<Link to="http://localhost:5173/"><button>REGISTER</button></Link>
   </div>
  )
}

export default Login