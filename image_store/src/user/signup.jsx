import { useState } from 'react'
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { Rgister } from '../Slice/AuthSlice'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import Home from '../Layout/Layout'

function Signup(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[previewImage,SetpreviewImage] = useState('')
    const [SignUpData, SetsignupData] = useState({
        fullName:'',
        email:"",
        mobileNumber:"",
        password:"",
        avatar:""
    })
    function handleUserInput(event){
        const{name,value} = event.target;
        SetsignupData({
            ...SignUpData,
            [name]:value

        })
        
    }
    function uploadImage(event){
        event.preventDefault()
        const uploadImage = event.target.files[0];
        console.log(uploadImage)
        if(uploadImage){
            SetsignupData({
                ...SignUpData,
             avatar:uploadImage
            })
            const filereader = new FileReader()
            filereader.readAsDataURL(uploadImage)
            filereader.addEventListener('load', function(){
                SetpreviewImage(this.result)
                
            })
        }
    }
     async function createAccount(event){
             event.preventDefault()
        

        console.log(SignUpData.fullName)
        console.log(SignUpData.email)
        console.log(SignUpData.mobileNumber)
        console.log(SignUpData.avatar)
        console.log(SignUpData.password) 

        if(!SignUpData.fullName||!SignUpData.email||!SignUpData.mobileNumber||!SignUpData.password||!SignUpData.avatar){
            toast.error(" All field is required")
        }
       const formDate = new FormData()
       formDate.append('fullName',SignUpData.fullName);
       formDate.append('email',SignUpData.email);
       formDate.append('mobileNumber',SignUpData.mobileNumber);
       formDate.append('password',SignUpData.password);
      formDate.append('avatar',SignUpData.avatar)
       const res = await dispatch(Rgister(formDate))
       if(res?.payload?.success) navigate('/')
        SetsignupData({
     fullName:"",
     email:"",
     mobileNumber:"",
     password:"",
     avatar:""

    })
    SetpreviewImage('')

     }

    


    return(
         <>
         <Home>

            <div className='min-h-[90vh] flex flex-col items-center justify-center'>
             <form 
             onSubmit={createAccount}
         
             className='w-96 flex flex-col items-center justify-center gap-3 p-3 rounded-lg text-white shadow-[0_0_10px_black] cursor-pointer' >
                <h3  className='text-2xl text-green-500'> <AiOutlineArrowLeft onClick={()=>navigate('/')}/> </h3>
                <h1 className='text-3xl text-amber-500'>Create Your Account</h1>
                <label htmlFor="image_uploads" className='cursor-pointer'>
                    {previewImage?(<img className="h-24 w-24 rounded-full m-auto" src={previewImage}/>):(<BsPersonCircle className='w-24 h-24 rounded-full mx-auto'/>)}
                </label>
                <input onChange={uploadImage} className='hidden' type="file" name="image_uploads"       id="image_uploads" 
                accept='.png,.jpg,.jpeg'
                />
                <div className='flex items-center justify-center flex-col gap-4 '>
                    <label htmlFor="fullName" className='text-xl font-semibold tracking-widest'> FullName</label>
                    <input type="text" name="fullName" id="fullName"
                    placeholder='Eneter your name '
                    className='text-center pb-2 pt-2  bg-transparent border rounded-lg w-full hover:rounded-none cursor-pointer'
                    onChange={handleUserInput}
                    value={SignUpData.fullName}
                    />
                    <label htmlFor="email " className='text-xl font-semibold'>Email</label>
                    <input type="email" name="email" id="email" 
                     placeholder='Enter your email'
                     className='text-center  font-semibold pb-2 pt-2 rounded-lg border bg-transparent hover:rounded-none'
                     onChange={handleUserInput}
                     value={SignUpData.email}
                    />
                    <label htmlFor="mobileNumber" className='text-xl font-semibold '> MobileNumber</label>
                    <input type="text" name="mobileNumber" id="mobileNumber"
                    placeholder='Enter your mobile number'
                    className='text-center pb-2 pt-2 font-semibold border bg-transparent rounded-lg hover:rounded-none'
                    onChange={handleUserInput}
                    value={SignUpData.mobileNumber}
                    />
                    <label htmlFor="password" className='text-xl font-semibold'>password</label>
                    <input type="password" name="password" id="passeord" className='text-center font-semibold pb-2 pt-2 rounded-lg hover:rounded-none border bg-transparent'
                    placeholder= "Enter your Password"
                    onChange={handleUserInput}
                    value={SignUpData.password}
                    />

                </div>
                <button type='submit'
                 className='pb-2 pt-2 rounded-lg bg-yellow-500 w-full hover:rounded-none hover:bg-yellow-600 text-white transition-all ease-in-out duration-300'
                > CreateAccount</button>
                <p>
                    <Link to= '/login' className='text-lg link-secondary'> Have an Account  </Link>
                </p>
             </form>
               
            </div>
         </Home>
         
         </>
    )
}
export default Signup;