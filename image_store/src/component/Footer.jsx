import { FaFacebook, FaYoutube, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
function Footer(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return(
        <div className='h-[10vh] object-cover gap-5 w-full bg-indigo-400 flex flex-col items-center sm:flex sm:justify-between sm:items-center sm:flex-row cursor-pointer'>
        <div>
            <h5 className='text-xl font-semibold left-2 w-fit tracking-wider text-white '> Copy Right &copy;{year} All Right Resrved </h5>
        </div>
          <div className='flex gap-4 flex-col items-center justify-center sm:flex sm:flex-row text-white'>
            <a className='text-xl font-semi-bold text-blue-700' href="https://www.facebook.com/"><FaFacebook/></a>
            <a className='text-xl font-semi-bold text-blue-700' href="https://www.linkedin.com/"><FaLinkedinIn/></a>
            <a className='text-xl font-semi-bold text-red-600' href="https://www.youtube.com/channel/UC8NXd1mL-qoKo-r7TbnVu3g"><FaYoutube/></a>
            <a href=""><FaTwitter/></a>
          </div>
        </div>
    )
}
export default Footer