import { NavLink } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import logo from '../../assets/images/logo.png';
import { useState } from 'react';


const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false)


  return (
    <div className='flex flex-col w-full relative'>
      <div className='flex flex-row items-center justify-between w-full lg:py-5 py-3 lg:px-[10rem] px-5 border-b border-white'>
        <NavLink to='/'>
          <img src={logo} alt='logo' className=''/>
        </NavLink>
        <div className={`${isMobile ? 'hidden' : '' } tracking-wide flex flex-row gap-10 text-white items-center`}>
          <NavLink to='/about'>
            ABOUT
          </NavLink>
          <NavLink to='/subsidaries'>
            SUBSIDIARIES
          </NavLink>
          <NavLink to='/news'>
            NEWS
          </NavLink>
        </div>
        <div className={`${isMobile ? '' : 'hidden' } flex flex-row gap-4 text-white items-center`}>
          <i onClick={() => SetShowMenu(true)} className='fi fi-rr-menu-burger cursor-pointer'></i>
        </div>
      </div>
      {showMenu && 
        <div className='flex flex-col absolute w-full h-screen bg-[#110f16] bg-opacity-70'>
          <div className='flex flex-col w-full relative bg-white'>
            <div className='flex flex-row items-center justify-between w-full py-3  px-5 border-b border-gray-200'>
              <NavLink to='/'>
                <img src={logo} alt='logo' className=''/>
              </NavLink>
              <i onClick={() => SetShowMenu(false)} className='fi fi-rr-cross text-[#B39659] cursor-pointer'></i>
            </div>
            <div className='flex flex-col tracking-wide w-full gap-[2rem] p-5 border-b border-gray-200'>
              <NavLink onClick={() => SetShowMenu(false)} to='/about'>
                ABOUT
              </NavLink>
              <NavLink onClick={() => SetShowMenu(false)} to='/subsidaries'>
                SUBSIDIARIES
              </NavLink>
              <NavLink onClick={() => SetShowMenu(false)} to='/news'>
                NEWS
              </NavLink>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar