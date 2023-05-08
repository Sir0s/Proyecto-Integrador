import { useState } from "react";
import styles from "./Form.module.css"
import Validation from "../Utils/Validation";


const Form = (props) =>{
    const {login} = props;
    const [userData, setUserData] = useState({email: '', password : ''})
    const [errors, setErrors] = useState({email: '', password : ''})

const handleChange = (event) => {
   
        
    setUserData({...userData,[event.target.name]:event.target.value})
    
    setErrors(Validation({...userData,[event.target.name]:event.target.value}))
 }

 const handleSubmit = (event) =>{
    event.preventDefault();
    login(userData)
 }
    
return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Email:  </label>
        <input type="email" placeholder="Email..." name="email" value={userData.email} onChange={handleChange}/>
        {
            errors.email ? ( <p>{errors.email}</p> ) : null
        }
    <div>
        <label>Password:  </label>
        <input type="password" placeholder="Password..."  name="password" value={userData.password} onChange={handleChange}/>
        {
            errors.password ? ( <p>{errors.password}</p> ) : null
        }
    </div>
    <button>Submit</button>
    </form>
    </div>
)
}   
export default Form;