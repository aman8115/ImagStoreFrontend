
import Home from '../Layout/Layout'
import fish from '../image/pexels-chevanon-1335971.jpg'
import panda from '../image/pexels-diana-silaraja-794257-1661535 (1).jpg'
import sheep from '../image/pexels-katlovessteve-678448.jpg'
import sky  from '../image/pexels-pixabay-237272.jpg'
import dog  from '../image/pexels-tomfisk-1125979.jpg'
function AboutUs(){
   return(
    <Home>

        <div className='min-h-[90vh] flex flex-col items-center justify-center mt-10 '>

         <div className='w-full carousel h-[550px]  '>
            <div id='item1' className='w-full carousel-item'>
                <img src={fish} alt="fish" className='w-full h-1/2 '  />


            </div> 
            <div id='item2' className='w-full carousel-item'>
            <img src={panda}alt="panda" className='w-full h-1/2' />
            </div>
            <div id="item3" className='w-full carousel-item'>
                <img src={sheep} alt="sheep" className='w-full h-1/2' />
            </div>
            <div id="item4" className='w-full carousel-item'>
                <img src={sky} alt="sky"  className='w-full h-1/2'/>
            </div>
            <div id='item5' className='w-full carousel-item'>
                <img src={dog} alt="dog"  className='w-full h-1/2'/>
            </div>
    
            
            

        </div>
        <div className='flex justify-center w-full h-20 py-2 gap-2 text-white'>

    <a href="#item1">1</a>
    <a href="#item2">2</a>
   <a href="#item3">3</a>
   <a href="#item4">4</a>
    <a href="#item5">5</a>
</div>
      
        

        </div>
    </Home>
   )

}
export default AboutUs;