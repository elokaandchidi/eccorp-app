import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import ImageAbout from '../../assets/images/img_about.png';
import ImageChidi from '../../assets/images/chidi.png';

const About = () => {
  
  return (
    <div className='flex flex-col lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-about w-full'>
        <Navbar/>
        <div className='flex flex-row lg:justify-start justify-center playfair-font gap-2 w-full lg:px-[10rem] lg:text-lg text-white pt-10 lg:pt-[4rem]'>
          <NavLink to='/'>
            HOMEPAGE
          </NavLink>/
          <span className='font-semibold'>ABOUT</span>
        </div>
        <div className='flex flex-col gap-5 w-full items-center lg:mt-[5rem] lg:mb-[10rem] mb-20'>
          <div className={`leading-relaxed text-white playfair-font lg:text-[3rem] text-2xl mt-5 font-bold text-center lg:w-1/3 w-4/6`}>
            About EC CORP
          </div>
          <div className='text-white lg:text-lg text-sm lg:w-full w-3/4 text-center'>Welcome to EC CORP, the visionary force behind the emergence of innovative enterprises.</div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex flex-col lg:w-2/5 gap-3 lg:text-lg text-sm'>
          <div className='text-white playfair-font lg:text-[3rem] text-[1.7rem] leading-relaxed tracking-wider text-left font-bold'>
          Meet the Founders
          </div>
          
        </div>
        <div className='lg:w-3/5 flex flex-col gap-10 text-white'>
          <div className='text-lg'>
            Lorem ipsum dolor sit amet consectetur. Cursus tortor vitae posuere eget potenti elementum elit urna nulla. Amet neque placerat sociis nisl. Ultrices sollicitudin facilisis tellus nibh gravida duis. 
          </div>
          <div className='flex lg:flex-row flex-col gap-10 w-full lg:items-center'>
            <img src={ImageChidi} className='lg:w-1/2' alt="background"/>
            <div className='flex flex-col lg:w-1/2'>
              <div className='text-[2rem] font-semibold'>Eloka</div>
              <div className='text-lg lg:mt-10 mt-5'>
                Eget elementum morbi non in tristique purus venenatis eu. Tristique mi id integer id ac massa nullam euismod. Tincidunt rhoncus placerat pretium quisque fermentum quam lorem ullamcorper. Lobortis purus metus praesent platea magna sed suspendisse tristique. Pretium aliquam erat nunc blandit nunc. Leo tellus eu arcu tempor vel vitae. Sed magnis tellus posuere feugiat.
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse gap-10 w-full items-center'>
            <div className='flex flex-col lg:w-1/2'>
              <div className='text-[2rem] font-semibold'>Chidi</div>
              <div className='text-lg lg:mt-10 mt-5'>
                Eget elementum morbi non in tristique purus venenatis eu. Tristique mi id integer id ac massa nullam euismod. Tincidunt rhoncus placerat pretium quisque fermentum quam lorem ullamcorper. Lobortis purus metus praesent platea magna sed suspendisse tristique. Pretium aliquam erat nunc blandit nunc. Leo tellus eu arcu tempor vel vitae. Sed magnis tellus posuere feugiat.
              </div>
            </div>
            <img src={ImageChidi} className='lg:w-1/2' alt="background"/>
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex flex-col lg:w-2/5 gap-3 lg:text-lg text-sm'>
          <div className='text-white playfair-font lg:text-[3rem] text-[1.7rem] leading-relaxed tracking-wider text-left font-bold'>
            Empowering <br/> Innovations to Enrich <br/> Lives
          </div>
          
        </div>
        <div className='lg:w-3/5 flex flex-col gap-4 text-white'>
          <div className='flex flex-col gap-4 lg:text-[2.5rem] text-[1.4rem] playfair-font font-semibold'>
            <div>1. Innovation</div>
            <div>2. Technology</div>
            <div>3. Impact</div>
          </div>
          <div className='text-lg'>
            We believe that innovation is the lifeblood of any successful multinational corporation, and we leverage our subsidiaries worldwide to drive technological advancements. Through strategic partnerships and collaborations with local talent, we bring fresh perspectives and innovative ideas to the fore.
          </div>
          <div className='text-lg'>
            We harness the power of technology through our subsidiaries, fostering a culture of innovation and collaboration across borders. Each subsidiary acts as a hub for technological expertise, developing and implementing cutting-edge solutions tailored to their specific market needs. By leveraging the strengths of each subsidiary and sharing best practices, we ensure that technology is at the core of our global operations, driving efficiency, and delivering value to our clients.
          </div>
          <img src={ImageAbout} alt="background"/>
          <div className='text-lg'>
            We leverage on technology to make a meaningful impact on people's lives. By developing innovative solutions tailored to local needs, we empower individuals and communities to thrive. Our recent expansion into Africa has resulted in the use of our technology to address pressing social and economic challenges, which has created positive change and a lasting impact in the communities we serve
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;
