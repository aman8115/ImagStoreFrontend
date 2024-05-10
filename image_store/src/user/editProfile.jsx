import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import Home from '../Layout/Layout'
import {BsPersonCircle} from 'react-icons/bs'
import { getUserdtails, updateprofile } from "../Slice/AuthSlice";
import {AiOutlineArrowLeft} from 'react-icons/ai'
function EditProfile(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[previewImage,SetPreviewImage] = useState('')
    const [data, Setdata] = useState({
        previewImage:'',
        fullName:'',
        mobileNumber:'',
        avatar:undefined,
        userId: useSelector((state)=>state?.auth?.data?._id)
    })

    function uploadImage(event){
        const uploadImage = event.target.files[0]
        console.log(uploadImage)
        if(uploadImage){
          Setdata({
            ...data,
            avatar:uploadImage
          })
        }
        const filereader = new FileReader()
        filereader.readAsDataURL(uploadImage)
        filereader.addEventListener('load',function(){
            SetPreviewImage(this.result)
        })
    }
    function userInputhandel(event){
        const{name,value} = event.target
        Setdata({
            ...data,
            [name]:value
        })
    }
    async function updateProfile(e){
        
        e.preventDefault();
       if(!data.fullName||!data.mobileNumber||!data.avatar){
        toast.error(" All field is required ")
       }
       const formdata = new FormData()
       formdata.append('fullName',data.fullName)
       formdata.append('mobileNumber',data.mobileNumber)
       formdata.append('avatar',data.avatar)
       
 
       try{

        await dispatch(updateprofile([data.userId,formdata])) 
        await dispatch(getUserdtails())
       navigate('/profile')
       }catch(e){

        toast.error(` user profile not updated try again!! ${e}`)
       }

    }
    return(
       <Home>

       <div className="min-h-[90vh] flex flex-col items-center justify-center"> 
        <form 
        noValidate 
        onSubmit={updateProfile}
        className="w-96 felx flex-col items-center justify-center p-4  rounded-lg shadow-[0_0_10px_black]"
        >
            <h1 className="text-center text-xl text-indigo-500">Edit Profile</h1>
            <div className="flex flex-col items-center justify-center ">
                <label htmlFor="upload_images">
                    {previewImage?(<img 
                    className="h-24 w-24 rounded-full mx-auto"
                    src={previewImage}/>
                    ):(<BsPersonCircle
                     className="h-24 w-24 rounded-full mx-auto"
                    />)}
                </label>
                <input type="file" name="upload_images"                 id="upload_images"
                accept=".png,.jpeg,.jpg"
                className="hidden"
                onChange={uploadImage}
                 
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 ">
                <label htmlFor="fullName" className="text-xl font-semibold"> FullName</label>
                <input 
                type="text"
                 name="fullName" 
                 id="fullName"
                 className="pb-2 pt-2 border bg-transparent rounded-lg hover:rounded-none text-center font-semibold"
                 placeholder="Eneter your Name"
                 onChange={userInputhandel}
                 value={data.fullName}
                 />
                 <label htmlFor="mobileNumber" className="text-xl font-semibold">mobileNumber</label>
                 <input 
                 className="text-center font-semibold rounded-lg pb-2 pt-2 border bg-transparent hover:rounded-none"
                 type="text" 
                 name="mobileNumber" 
                 id="mobileNumber"
                 placeholder="Enter mobilenumber"
                 onChange={userInputhandel}
                 value={data.mobileNumber}
                 
                 />
                 <button
                 type="submit" 
                 className="w-full border bg-indigo-500 text-white pb-2 pt-2 rounded-lg hover:rounded-none hover:bg-indigo-600  transition-all ease-in-out duration-300 font-semibold "
                 >Edit profile</button>

                <Link className="text-xl link-secondary" to='/profile'><AiOutlineArrowLeft/></Link> 

            </div>

        </form>
       
       </div>
       </Home> 
    )
}
export default EditProfile;
