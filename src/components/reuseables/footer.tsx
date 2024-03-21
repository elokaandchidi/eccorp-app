import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaSquareFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
	

const Footer = () => {
  
  return (
    <div className={`flex-col lg:flex-row border-t border-white p-10 px-[10rem] w-full items-center flex justify-between gap-3`}>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='h-10'/>
      </NavLink>
      <div className='flex flex-row items-center text-white gap-5'>
        <FaInstagram className='text-2xl' />
        <FaSquareFacebook className='text-2xl' />
        <FaSquareXTwitter className='text-2xl' />
      </div>
      <div className='flex flex-row text-lg text-white items-center gap-5'>
        <i className="fi fi-rr-envelope mb-[-.3rem]"></i>
        <div className=''>hello@eccorp.com</div>
      </div>
    </div>
  )
}

export default Footer