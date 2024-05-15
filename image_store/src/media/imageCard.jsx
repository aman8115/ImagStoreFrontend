import Home from "../Layout/Layout"

function ImageCard({data}){
return(
    

        <div  className="text-white w-[22rem] h-[430px] rounded-lg shadow-xl group overflow-hidden cursor-pointer text-center font-semibold tracking-wider" >
            <img  
             className="h-48 w-full rounded-tr-lg rounded-tl-lg transition-all ease-in-out group-hover:scale[1,2]"
            src={data?.Post?.secure_url} />
            {console.log(data?.Post?.secure_url)}

            <div className="flex flex-col items-center justify-center gap-3  text-lg font-semibold tracking-wider">
                <h2 className="text-amber-500">{data?.nameOfimage}</h2>
                <p className="text-indigo-600">{data?.description}</p>
                
            </div>
        </div>
        
  
)
     
}
export default ImageCard