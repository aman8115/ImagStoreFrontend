import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "../Slice/AuthSlice";
import Home from "../Layout/Layout";

function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[loginData,SetloginData] = useState({
        email:"",
        password:""
    })
    function handelLoginData(event){
        const{name,value} = event.target;
        SetloginData({
            ...loginData,
            [name]:value
        })
    }
    async function LoginAccount(event){
        event.preventDefault()
        if(!loginData.email||!loginData.password){
            toast.error(' email and password is required')
            return
        }
        const res = await dispatch(LogIn(loginData))
        if(res?.payload?.success) navigate('/')

         SetloginData({
               email:'',
              password:''
         })
    }
    return(
        <Home>
            <div className="h-[90vh] flex flex-col items-center justify-center">
               
                <form noValidate 
                onSubmit={LoginAccount}
                className=" w-96 flex flex-col items-center justify-center p-3 gap-4 rounded-lg  shadow-[0_0_10px_black]"
                > <h1 className="text-2xl font-semibold text-indigo-500"> Log In Account</h1>
                <label htmlFor="email">Email</label>
                <input 
                className="text-center pb-2 pt-2 border bg-transparent rounded-lg hover:rounded-none"
                 type="email" 
                 name="email" 
                 id="email"
                placeholder="Enter your email"
                onChange={handelLoginData}
                value={loginData.email}
                />
                <label htmlFor="password">Password</label>
                <input 
                className="text-center pb-2 pt-2 border bg-transparent rounded-lg hover:rounded-none"
                type="password" 
                name="password" 
                id="password"
                placeholder="Enter your passsword"
                onChange={handelLoginData}
                value={loginData.password}
                />
                <button 
                type="submit"
                className="w-full border bg-yellow-500 pb-2 pt-2 text-white rounded-lg transition-all ease-in-out duration-300 hover:rounded-none hover:bg-yellow-600"

                >LogIn</button>
         <p > 
             <Link to= '/signup'
              className="text-lg link link-primary"
             > Do not have an Account </Link>
            
            </p>
                </form>

             

            </div>

        </Home>
    )
    
}
export default Login