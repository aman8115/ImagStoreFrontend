import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-hot-toast'
import Home from '../Layout/Layout'
import { Contact } from '../Slice/AuthSlice'
import axiosInstance from '../Helper/axiosInstance'
function Contactus(){
const dispatch = useDispatch()
const navigate = useNavigate()
const [maildata,Setmaildata] = useState({
    
    email:"", 
    subject:"", 
    message:""
})
function handelmailInput(event){
    const{value,name} = event.target;
    Setmaildata({
        ...maildata,
        [name]:value
    })
}

async function sendMail(event){
    event.preventDefault();
    console.log(maildata.email,maildata.subject,maildata.message)
    if(!maildata.email||!maildata.subject||!maildata.message){
        toast.error(' All field is required')
        return
    }
  
   
    
    const res = await  dispatch(Contact({...maildata}))
    if(res?.payload?.success) navigate('/')
        Setmaildata({
            email:"",
            subject:"",
            message:""
     })


   
}

return(
    <Home>
        <div className='min-h-[90vh] flex flex-col items-center justify-center'>
            <form 
            onSubmit={sendMail}
            className='w-96 flex flex-col items-center justify-center p-4 rounded-lg shadow-[0_0_10px_black] gap-5'
             noValidate>
                <h1 className='text-2xl font-semibold text-green-500'>Contact Us </h1>
                <label className='text-xl font-semibold' htmlFor="email">Email</label>
                <input 
                type="email"
                 name="email" 
                 id="email"
                 placeholder='Enetr Email'
                 className='p-2 border bg-transparent hover:rounded-none rounded-lg text-center font-semibold tracking-wider text-lg'
                 onChange={handelmailInput}
                 value={maildata.email}
                 />
                 <label htmlFor="subject" className='text-xl font-semibold'>Subject</label>
                 <input 
                 type="text" 
                 name="subject" 
                 id="subject" 
                 placeholder='Enetr  subject'
                 className='p-2 border bg-transparent rounded-lg hover:rounded-lg text-center font-semibold text-lg tracking-wider'
                 onChange={handelmailInput}
                 value={maildata.subject}
                 
                 />

                 <label htmlFor="message" className='text-xl font-semibold'>Message</label>
                 <input
                  type="text" 
                  name="message"
                  id="message"
                  placeholder='Ask your Qurey'
                  className='p-2 border bg-transparent rounded-lg text-center text-lg font-semibold hover:rounded-none h-32 '
                  onChange={handelmailInput}
                  value={maildata.message}
                    />

                    <button
                    type='submit'
                    className='p-2 border bg-lime-300 rounded-lg transition-all ease-in-out text-center text-lg tracking-wider hover:rounded-none hover:bg-lime-400 text-black w-full'
                    
                    >Send Message</button>
             </form>

        </div>
    </Home>
    
)
}


export default Contactus