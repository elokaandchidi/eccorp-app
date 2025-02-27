import { NavLink } from "react-router-dom";
import { LiaQuoteLeftSolid, LiaQuoteRightSolid } from "react-icons/lia";

import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import rollsroyceImg from '../../assets/images/rolls royce_bw.png';
import discovery_bwImg from '../../assets/images/discovery_bw.png';
import dftlogo_bwImg from '../../assets/images/dft logo_bw.png';
import dhsclogo_bwImg from '../../assets/images/dhsc logo_bw.png';
import airfrance_bwImg from '../../assets/images/air france_bw.png';
import LloydsBankLogo_bwImg from '../../assets/images/LloydsBankLogo_bw.png';
import barclays_logo_bwImg from '../../assets/images/barclays_logo_bw.jpeg';
import clientImg from '../../assets/images/client.png';


const Clients = () => {

  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-client bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='h-full lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row lg:justify-start justify-center gap-2 w-full lg:text-xl text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <span className='font-semibold uppercase'>Clients</span>
          </div>
          <div className='flex flex-col w-full items-center lg:mt-[5rem] lg:mb-[20rem] mb-[10rem]'>
            <div className={`tracking-widest text-white  lg:text-[3.5rem] text-2xl my-5 font-bold text-center lg:w-1/3 w-4/6`}>
              Clients
            </div>
            
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:w-9/12 w-11/12 lg:mt-[-17rem] mt-[-10rem]'>
        <div className='text-white 2xl:w-1/5 lg:w-2/5 lg:text-[2rem]  uppercase text-2xl'>
          Previous Clients
          <div className='border-b border-[#B39659] w-1/12 pt-2'></div>
        </div>
        <div className="hidden lg:block">
          <div className={`flex lg:flex-row flex-col lg:gap-[4rem] w-full justify-between gap-5 lg:mt-10 mt-5`}>
            <img src={clientImg} alt='logo' className='w-60 h-60 object-fit grayscale'/>
            <img src={rollsroyceImg} alt='logo' className='w-60 h-60 object-contain grayscale'/>
            <img src={discovery_bwImg} alt='logo' className='w-60 h-60 object-fit grayscale'/>
            <img src={dftlogo_bwImg} alt='logo' className='w-60 h-60 object-contain grayscale'/>          
          </div>
        </div>
        <div className="hidden lg:block">
          <div className={`flex lg:flex-row flex-col lg:gap-[4rem] w-full justify-between gap-5 lg:mt-10 mt-5`}>
            <img src={dhsclogo_bwImg} alt='logo' className='w-60 h-60 object-contain grayscale' />
            <img src={airfrance_bwImg} alt='logo' className='w-60 h-60 object-contain grayscale' />
            <img src={LloydsBankLogo_bwImg} alt='logo' className='w-60 h-60 object-contain grayscale' />
            <img src={barclays_logo_bwImg} alt='logo' className='w-60 h-60 object-contain grayscale' />          
          </div>
        </div>
        <div className={`lg:hidden grid grid-cols-2 lg:gap-[4rem] w-full justify-center items-center gap-5 lg:mt-10 mt-5`}>
          <img src={rollsroyceImg} alt='logo' className='h-25 object-contain grayscale'/>
          <img src={clientImg} alt='logo' className='h-25 object-fit grayscale'/>
          <img src={discovery_bwImg} alt='logo' className='h-25 object-fit grayscale'/>
          <img src={dftlogo_bwImg} alt='logo' className='h-25 object-contain grayscale'/>          
          <img src={dhsclogo_bwImg} alt='logo' className='h-25 object-contain grayscale'/>          
          <img src={airfrance_bwImg} alt='logo' className='h-25 object-contain grayscale'/>          
          <img src={LloydsBankLogo_bwImg} alt='logo' className='h-25 object-contain grayscale'/>          
          <img src={barclays_logo_bwImg} alt='logo' className='h-25 object-contain grayscale'/>          
        </div>
      </div>

      <div className='flex flex-col lg:w-9/12 w-11/12 mt-16 lg:mb-36 mb-10'>
        <div className='text-white  2xl:w-1/5 lg:w-2/5 lg:text-[2rem] uppercase text-2xl'>
          What our clients say
          <div className='border-b border-[#B39659] w-2/12 pt-2'></div>
        </div>
        <div className='grid lg:grid-cols-3 lg:gap-[4rem] w-full justify-between gap-5 lg:mt-10 mt-5'>
          <div className='bg-[#383838] p-5 text-white flex flex-col gap-4 items-center'>
            <LiaQuoteLeftSolid className='text-[#B39659] text-[2rem]'/>
            <div className='text-center text-lg '>
              We have seen our organizational profitability increase significantly thanks in large part to EC Corp’s digital transformation and data analytics
            </div>
            <LiaQuoteRightSolid className='text-[#B39659] text-[2rem]'/>

            <div className='font-semibold tracking-wider text-xl'>Barclays</div>
            <div className=''>Richard</div>
          </div>  
          <div className='bg-[#383838] p-5 text-white flex flex-col gap-4 items-center'>
            <LiaQuoteLeftSolid className='text-[#B39659] text-[2rem]'/>
            <div className='text-center text-lg '>
              EC Corp’s expertise in designing and building a website is unmatched
            </div>
            <LiaQuoteRightSolid className='text-[#B39659] text-[2rem]'/>

            <div className='font-semibold tracking-wider text-xl'>Profitero</div>
            <div className=''>Hannah</div>
          </div>  
          <div className='bg-[#383838] p-5 text-white flex flex-col gap-4 items-center'>
            <LiaQuoteLeftSolid className='text-[#B39659] text-[2rem]'/>
            <div className='text-center text-lg '>
              I have no hesitation in recommending EC Corp for technology proficiency and capability
            </div>
            <LiaQuoteRightSolid className='text-[#B39659] text-[2rem]'/>

            <div className='font-semibold tracking-wider text-xl'>Rolls Royce</div>
            <div className=''>Gavin</div>
          </div>  
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Clients;