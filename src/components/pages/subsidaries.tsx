import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import BloomarketSiteImage from '../../assets/images/bloomarket_site.png';
import VyesociaSiteImage from '../../assets/images/vye_social_site.png';
import BloomarketLogo from '../../assets/images/bloo_market_logo_white.png';
import EctcLogo from '../../assets/images/ectc_logo.png';
import bgImg from '../../assets/images/bg_home.png';
import VyesocialLogo from '../../assets/images/vye_social_logo.png';

const Subsidaries = () => {
  
  return (
    <div className='flex flex-col lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-subsidaries w-full'>
        <Navbar/>
        <div className='flex flex-row lg:justify-start justify-center playfair-font gap-2 w-full lg:px-[10rem] lg:text-lg text-white pt-10 lg:pt-[4rem]'>
          <NavLink to='/'>
            HOMEPAGE
          </NavLink>/
          <span className='font-semibold'>SUBSIDIARIES</span>
        </div>
        <div className='flex flex-col gap-5 w-full items-center lg:mt-[5rem] lg:mb-[10rem] mb-20'>
          <div className={`leading-relaxed text-white playfair-font lg:text-[3rem] text-2xl mt-5 font-bold text-center lg:w-1/3 w-4/6`}>
            Subsidiaries
          </div>
          <div className='text-white lg:text-lg text-sm lg:w-full w-3/4 text-center'>Explore EC CORP's diverse range of subsidiaries, each specialising in unique areas to meet the evolving needs of our clients and communities..</div>
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex lg:flex-row flex-col-reverse w-full gap-10'>
          <img src={BloomarketSiteImage} className='lg:w-1/2 max:h-[30rem]' alt='BloomarketSiteImage'/>
          <div className='bg-[#383838] lg:w-1/2 relative'>
            <div className='flex flex-col gap-4 lg:p-10 p-5'>
              <div className='flex flex-row justify-between items-center mb-5'>
                <div className='text-white playfair-font lg:text-[2rem] text-lg font-bold'>
                  Bloo Market
                </div>
                <img src={BloomarketLogo} className='lg:w-40' alt='BloomarketLogo'/>
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur. Sed quam augue in aliquet rutrum ut. Vitae id laoreet donec gravida pulvinar et dis orci tempor. Non lorem elit consequat tortor. Neque bibendum dictum posuere eget ornare.
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                Dolor semper orci dignissim vehicula vel consectetur. Vestibulum facilisis vitae diam diam dictum odio ullamcorper leo vitae. Vitae lectus a neque orci tellus suspendisse pellentesque vitae. Eu consectetur proin justo orci arcu risus.
              </div>
              <div className='flex flex-row justify-end items-center right-10 lg:absolute bottom-10 gap-8 mt-10'>
                <div className='bg-[#B39659] p-4 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wide uppercase flex flex-row items-center'>
                  Go to Bloo Market
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col w-full gap-10'>
          <div className='bg-[#383838] lg:w-1/2 relative'>
            <div className='flex flex-col gap-4 lg:p-10 p-5'>
              <div className='flex flex-row justify-between items-center mb-5'>
                <div className='text-white playfair-font lg:text-[2rem] text-lg font-bold'>
                  Eamond & Chase
                </div>
                <img src={EctcLogo} className='w-20' alt='EctcLogo'/>
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur. Sed quam augue in aliquet rutrum ut. Vitae id laoreet donec gravida pulvinar et dis orci tempor. Non lorem elit consequat tortor. Neque bibendum dictum posuere eget ornare.
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                Dolor semper orci dignissim vehicula vel consectetur. Vestibulum facilisis vitae diam diam dictum odio ullamcorper leo vitae. Vitae lectus a neque orci tellus suspendisse pellentesque vitae. Eu consectetur proin justo orci arcu risus.
              </div>
              <div className='flex flex-row justify-end items-center right-10 lg:absolute bottom-10 gap-8 mt-10'>
                <div className='bg-[#B39659] p-4 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wide uppercase flex flex-row items-center'>
                  Go to ECTC
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </div>
              </div>
            </div>
          </div>
          <img src={bgImg} className='lg:w-1/2 max:h-[30rem]' alt='BloomarketSiteImage'/>
        </div>
        <div className='flex lg:flex-row flex-col-reverse w-full gap-10'>
          <img src={VyesociaSiteImage} className='lg:w-1/2 max:h-[30rem]' alt='VyesociaSiteImage'/>
          <div className='bg-[#383838] lg:w-1/2 relative'>
            <div className='flex flex-col gap-4 lg:p-10 p-5'>
              <div className='flex flex-row justify-between items-center mb-5'>
                <div className='text-white playfair-font lg:text-[2rem] text-lg font-bold'>
                Vye Social
                </div>
                <img src={VyesocialLogo} className='lg:w-40' alt='VyesocialLogo'/>
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur. Sed quam augue in aliquet rutrum ut. Vitae id laoreet donec gravida pulvinar et dis orci tempor. Non lorem elit consequat tortor. Neque bibendum dictum posuere eget ornare.
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                Dolor semper orci dignissim vehicula vel consectetur. Vestibulum facilisis vitae diam diam dictum odio ullamcorper leo vitae. Vitae lectus a neque orci tellus suspendisse pellentesque vitae. Eu consectetur proin justo orci arcu risus.
              </div>
              <div className='flex flex-row justify-end items-center right-10 lg:absolute bottom-10 gap-8 mt-10'>
                <div className='bg-[#B39659] p-4 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wide uppercase flex flex-row items-center'>
                  Go to Vye Social
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Subsidaries;
