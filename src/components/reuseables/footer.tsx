import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from '../../assets/images/logo.png';
import { BsChevronRight } from 'react-icons/bs';

import { FaAsterisk } from 'react-icons/fa6';
import Disclaimer from './disclaimer';
	

const Footer = () => {
  const [handleDisclaimerPopUp, setHandleDisclaimerPopUp] = useState(false);
  
  const handleToggleModal = (newValue : boolean) => {    
    setHandleDisclaimerPopUp(newValue);
  };
  
  if (handleDisclaimerPopUp) {
    return <Disclaimer handleToggleModal={handleToggleModal}/>
  }
  
  return (
    <div className='bg-footer flex flex-col items-center w-full lg:py-10 py-5'>
      <div className='flex flex-col lg:w-9/12 w-11/12 justify-center items-center lg:h-[35rem]'>
        <div className='flex flex-row w-full justify-between items-start'>
          <div className={`flex-col flex lg:w-auto w-full lg:items-start items-center gap-2`}>
            <NavLink className='' to='/'>
              <img src={logo} alt='logo' className='lg:h-20 h-12'/>
            </NavLink>
            
          </div>

          <div className={`max-md:hidden flex-col flex justify-between gap-2 w-1/2`}>
            <div className='text-[#B39659] lg:text-[1.5rem] text-lg font-semibold  tracking-wide'>
              OFFICE LOCATIONS
              <div className='border-b-2 border-white w-1/12 pt-3'></div>
            </div>
            <div className='grid grid-cols-2 border-b text-lg border-white justify-between items-center text-[1.4rem] text-white mt-5 pb-2 gap-4'>
              <div className=''>Lagos, NG</div>
              <div className='flex flex-row gap-3 justify-end items-center'>
                <div>Google Maps</div>
                <BsChevronRight className='text-[#B39659]'/>
              </div>
            </div>
            <div className='grid grid-cols-2 border-b text-lg border-white justify-between items-center text-[1.4rem] text-white mt-5 pb-2 gap-4'>
              <div className=''>London, UK</div>
              <div className='flex flex-row gap-3 justify-end items-center'>
                <div>Google Maps</div>
                <BsChevronRight className='text-[#B39659]'/>
              </div>
            </div>
            <div className='grid grid-cols-2 border-b text-lg border-white justify-between items-center text-[1.4rem] text-white mt-5 pb-2 gap-4'>
              <div className=''>New York, US</div>
              <div className='flex flex-row gap-3 justify-end items-center'>
                <div>Google Maps</div>
                <BsChevronRight className='text-[#B39659]'/>
              </div>
            </div>
            <div className='flex flex-row text-lg justify-between items-center text-[1.4rem] text-white mt-5 pb-2 gap-4'>
              <div onClick={() => setHandleDisclaimerPopUp(!handleDisclaimerPopUp)} className='flex flex-row gap-3 items-center cursor-pointer'>
                <FaAsterisk />
                <div className=''>Read disclaimer</div>
              </div>
              <NavLink to='/contact' className='flex flex-row gap-3 justify-end items-center'>
                <div className='font-semibold text-[#B39659] text-[1.3rem]'>VISIT OUR CONTACT PAGE</div>
                <BsChevronRight className='text-white'/>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='text-white lg:text-[1.4rem] lg:mt-10 mt-3'>Designed by  <span className='text-[#B39659]'>EC Corp</span></div>
      </div>

    </div>
  )
}

export default Footer