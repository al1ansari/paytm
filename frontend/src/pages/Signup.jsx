
import { useState } from 'react'
import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
import Heading from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { SubHeading } from '../components/SubHeading'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Signup() {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [password,setPassword] = useState();
  const [username,setUsername] = useState();
  const navigate = useNavigate();
  return (
    <div className='bg-slate-700 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
         <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"} />
            <SubHeading label={"Enter your information to create to account"}/>
            <InputBox onChange={(e)=>setFirstName(e.target.value)} label={"First Name"} placeholder="John"/>
            <InputBox onChange={e=>setLastName(e.target.value)} label={"Last Name"} placeholder="Doe"/>
            <InputBox onChange={e=>setUsername(e.target.value)} label={"Email"} placeholder="JDoe@gmail.com"/>
            <InputBox onChange={e=>setPassword(e.target.value)} label={"Password"} placeholder="********"/>
            <div className='pt-4'>
              <Button onClick={async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                  username,
                  firstName,
                  lastName,
                  password
                });
              localStorage.setItem("token",response.data.token) 
              navigate("/dashboard") 
              }} label={"Sign Up"} />
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>    
          </div>
      </div>
    </div>
  )
}

export default Signup