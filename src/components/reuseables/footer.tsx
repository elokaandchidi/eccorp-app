import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// import { FaSquareFacebook, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';
	

const Footer = () => {
  
  return (
    <div className={`flex-col lg:flex-row border-t border-white p-10 px-[10rem] w-full items-center flex justify-between gap-3`}>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='h-10'/>
      </NavLink>
      
    </div>
  )
}

export default Footer