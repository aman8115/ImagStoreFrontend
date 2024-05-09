import Home from "../Layout/Layout";
import Main from '../image/Main.png'

function HomePage(){
    return(
        <Home> 
       <div className=" h-[90vh] pt-10 flex  flex-col items-center justify-center md:flex md:items-center md:justify-evenly md:flex-row ">
        <div className="flex flex-col items-center justify-center gap-3 w-1/2">
          <h1 className="text-3xl font-bold tracking-wider text-indigo-500 "> Store Your Iamge here</h1>
          <p className="text-xl font-semibold text-yellow-300"> you can store your image and Video here </p>
          <span className="text-xl font-semibold">We are provide a highst online secure Plateform to store image</span>

        </div>
       <div className="w-1/2">
            <img src={Main}alt="" />
         </div>
          
       </div>

        </Home>
    )

}
export default HomePage