import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import ImageAbout from '../../assets/images/img_about.png';
import ImageChidi from '../../assets/images/chidi.jpg';
import ImageEamon from '../../assets/images/eamon.jpg';

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
          <div className='text-white lg:text-[1.25rem] text-[1rem] lg:w-full w-3/4 text-center'>Welcome to EC CORP, the visionary force behind the emergence of innovative enterprises.</div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex flex-col lg:w-2/5 gap-3 lg:text-lg text-sm'>
          <div className='text-white playfair-font lg:text-[3rem] text-[1.7rem] tracking-wider text-left font-bold'>
          Meet the Founders
          </div>
        </div>
        <div className='lg:w-3/5 flex flex-col gap-10 text-white items-end'>
          <div className='flex lg:flex-row flex-col gap-10 lg:items-start justify-end'>
            <img src={ImageEamon} className='object-contain h-[20rem]' alt="background"/>
            <div className='flex flex-col lg:w-1/2'>
              <div className='text-[2rem] font-semibold mt-[-.6rem]'>Eloka</div>
              <div className='text-lg lg:mt-10 mt-5'>
                Eloka Amobi (alias - Eamon) is a tech entrepreneur known for his strategic insight and innovative leadership, with a passion for technology product design and digital innovation. With his extensive experience in business, financial services, law and technology, has played a pivotal role in shaping EC Corp’s growth trajectory from its inception.
              </div>
            </div>
          </div>
          <div className="border-t-2 border-[#B39659] w-full lg:w-5/6"></div>
          <div className='flex lg:flex-row flex-col-reverse gap-10 lg:items-start justify-end'>
            <div className='flex flex-col lg:w-1/2'>
              <div className='text-[2rem] font-semibold'>Chidi</div>
              <div className='text-lg lg:mt-10 mt-5'>
                Chidi Nlewedim (alias - Chase), is a tech entrepreneur with a passion for data and Artificial Intelligence (AI) and has been instrumental in driving EC Corp’s technological advancements and strategic direction, and has a background in pharmaceutical, finance and nuclear.
              </div>
            </div>
            <img src={ImageEamon} className='object-contain h-[20rem]' alt="background"/>
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex flex-col lg:w-2/5 gap-3 lg:text-lg text-sm'>
          <div className='text-white playfair-font lg:text-[3rem] text-[1.7rem] leading-snug tracking-wider text-left font-bold'>
            Empowering Innovations to Enrich  Lives
          </div>
          
        </div>
        <div className='lg:w-3/5 flex flex-col gap-4 text-white'>
          <div className='flex flex-col gap-4 lg:text-[2.5rem] text-[1.4rem] playfair-font font-semibold'>
            <div>1. Innovation</div>
            <div>2. Technology</div>
            <div>3. Impact</div>
          </div>
          <div className='text-lg lg:mt-10 mt-5'>
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
