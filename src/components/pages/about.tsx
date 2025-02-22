import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import ImageAbout from '../../assets/images/img_about.png';
import { BsChevronRight } from "react-icons/bs";

const About = () => {
  
  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-about bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row lg:justify-start justify-center font-akshar gap-2 w-full lg:text-xl text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <span className='font-semibold'>ABOUT</span>
          </div>
          <div className='flex flex-col gap-5 w-full items-center lg:mt-[5rem] mb-20'>
            <div className={`leading-relaxed tracking-wider text-white lg:text-[3.5rem] text-2xl mt-5 font-bold text-center lg:w-1/3 w-4/6`}>
              About ECCORP
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:mt-[10rem] lg:gap-12 gap-5 justify-between items-start w-full'>
            <div className='flex flex-col lg:w-3/12 gap-3 lg:text-lg text-sm'>
              <div className='text-white  lg:text-[3rem] text-[1.7rem] leading-snug tracking-wider text-left font-bold'>
                In business we are guided by these principles:
              </div>
            </div>
            <div className='lg:w-4/5 flex flex-col gap-4 text-white'>
              <div className='flex flex-col gap-4 lg:text-[2.5rem] text-[1.4rem] text-[#B39659] font-akshar font-semibold'>
                <div>1. Innovation</div>
                <div>2. Technology</div>
                <div>3. Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col lg:gap-12 gap-5 justify-end items-start lg:w-9/12 w-11/12'>
        <div className={`sm:hidden flex flex-col lg:w-3/12 gap-3 lg:text-lg text-sm`}>
          &nbsp;
        </div>
        <div className='lg:w-4/5 font-akshar flex flex-col gap-4 text-white'>
          <div className='text-xl leading-loose mt-5'>
            <b>Innovation</b> - At ECCORP, innovation is at the core of everything we do. We thrive on pushing the boundaries of conventional thinking and constantly seek out new ways to solve complex problems. Our innovation stems from a combination of cutting-edge technologies, interdisciplinary collaboration, and a relentless pursuit of excellence. We foster a culture of creativity and experimentation, empowering our team to explore novel ideas and approaches. Through continuous research and development, we stay ahead of emerging trends and anticipate the needs of our clients. By harnessing the power of innovation, we deliver transformative solutions that drive tangible results and shape the future of technology.
          </div>
          <div className='text-xl leading-loose'>
            <b>Technology</b> - Technology isn't just a tool; it's the cornerstone of our operations. We leverage the latest advancements in artificial intelligence, data analytics, and automation to drive efficiency and innovation. Our team utilizes state-of-the-art software platforms and custom-built solutions to streamline processes, enhance decision-making, and deliver unparalleled value to our clients. Whether it's implementing cloud-based infrastructure, developing bespoke software applications, or harnessing the power of IoT devices, we embrace technology at every step of the consulting journey. By staying at the forefront of technological evolution, we empower our clients to adapt, grow, and thrive in an ever-changing digital landscape.
          </div>
          <img src={ImageAbout} className='grayscale' alt="background"/>
          <div className='text-xl leading-loose'>
            <b>Impact</b> - We pride ourselves on making a significant impact on businesses across various industries. Through our tailored solutions and strategic guidance, we help organizations optimize their operations, maximize efficiency, and unlock new opportunities for growth. Whether it's implementing innovative technologies, optimizing processes, or providing expert advice on digital transformation initiatives, our team is dedicated to driving tangible results for our clients. By aligning our expertise with their unique goals and challenges, we enable businesses to stay competitive, adapt to market dynamics, and ultimately thrive in the digital age. Our commitment to excellence and client success ensures that the impact we make is not only significant but also sustainable in the long run.
          </div>
        </div>
      </div>
      <div className={`sm:bg-about-mobile bg-about2 bg-cover bg-no-repeat grayscale w-full mb-10`}>
        <div className='bg-[#191919] bg-opacity-70 h-[15rem] flex flex-col items-center justify-center'>
          <NavLink to={"/professionals"} className='border border-white font-akshar tracking-wider flex flex-row gap-2 p-3 lg:px-[5rem] px-10 items-center text-white uppercase font-bold text-sm lg:text-xl'>
            The Professionals
            <BsChevronRight className="lg:text-[1.3rem]"/>
          </NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;