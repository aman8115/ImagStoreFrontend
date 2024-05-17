import { useDispatch } from "react-redux";
import Home from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { postImage } from "../Slice/postSlice";

function PostImage (){
const dispatch = useDispatch()
const navigate = useNavigate()
const [previewImage,SetpreviewImage] = useState('')
const[imageData, SetimageData] = useState({
    nameOfimage:'',
    description:'',
    Post:''

})
function handelpostData(event){
    const{name,value} = event.target;
    SetimageData({
        ...imageData,
        [name]:value
    })
}

function handelpostImage(event){
    const uploadpost = event.target.files[0]
    if(uploadpost){
        SetimageData({
            ...imageData,
            Post:uploadpost
        })
    }
      const filereader = new FileReader()
      filereader.readAsDataURL(uploadpost)
      filereader.addEventListener('load',function(){
        SetpreviewImage(this.result)
      })
}
 async function imagePost(event){
    event.preventDefault()
    if(!imageData.nameOfimage||!imageData.description||!imageData.Post){
        toast.error(' all  field is required')
    }

    const formDate = new FormData()
    formDate.append('nameOfimage',imageData.nameOfimage)
    formDate.append('description',imageData.description)
    formDate.append('Post',imageData?.Post)
    const res =  await dispatch(postImage(formDate))
    if(res?.payload?.success) navigate('/getimage')
      SetimageData({
     nameOfimage:'',
     description:'',
     Post:""
    })
    SetpreviewImage('')
 }

    return(
        <Home>
        <div className="min-h-[90vh] flex flex-col items-center justify-center"> 
        <form 
        onSubmit={imagePost}
        noValidate
        className="w-96 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-[0_0_10px_black]"
        
        >
            <h1 className="text-xl text-yellow-400 font-semibold">Post Image</h1>
            <div className="flex flex-col items-center justify-center ">
              <label htmlFor="image_uploads" className="cursor-pointer">

                  {
                    previewImage?(<img
                    src={previewImage}
                    className='w-full h-44 m-auto  border'
                    />):(<div className='w-full h-44 m-auto  items-center justify-center border'>
                        <h1>uploadImage
                        </h1>
                    </div>)
                }
                </label>
               <input onChange={handelpostImage} className='hidden' type="file"  name="image_uploads"       id="image_uploads" 
                accept='.png,.jpg,.jpeg'
                />
                

                <label htmlFor="nameOfimage" className='text-xl font-semibold tracking-widest'> Name of image</label>
                    <input type="text" name="nameOfimage" id="nameOfimage"
                    placeholder='Eneter  name of image'
                    className='text-center pb-2 pt-2  bg-transparent border rounded-lg w-full hover:rounded-none cursor-pointer'
                    onChange={handelpostData}
                    value={imageData.nameOfimage}
                    />


            <label htmlFor="description" className='text-xl font-semibold tracking-widest'>description</label>
                    <input type="text" name="description" id="description"
                    placeholder='Eneter description'
                    className='text-center pb-2 pt-2  bg-transparent border rounded-lg w-full hover:rounded-none cursor-pointer'
                    onChange={handelpostData}
                    value={imageData.description}
                    />

                <button type='submit'
                 className='pb-2 pt-2 rounded-lg bg-yellow-500 w-full hover:rounded-none hover:bg-yellow-600 text-white transition-all ease-in-out duration-300'
                > Post image</button>

            </div>
        </form>

        </div>

        </Home>
    )

}
export default PostImage;