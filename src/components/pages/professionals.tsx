import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";
import { useEffect, useState } from "react";
import { professionalListQuery } from "../../utils/data";
import { client } from "../../utils/client";


interface professionalInfo{
  _id: string;
  name: string;
  body: string;
  title: string;
  mainImageUrl: string;
  role: string;
  education: any;
  experience: any;
}


const Professionals = () => {
  const [executiveList, setExecutiveList] = useState<professionalInfo[]>([]);
  const [leaderList, setLeaderList] = useState<professionalInfo[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fetchNews = async () =>{
    await client.fetch(professionalListQuery('executive'))
    .then((data) => {
      setExecutiveList(data);
      setLoading(false);
    })

    await client.fetch(professionalListQuery('leadership'))
    .then((data) => {
      setLeaderList(data);
      setLoading(false);
    })
  }
  
  useEffect(() => {
    setLoading(true);
    fetchNews();

    // eslint-disable-next-line
  }, []);
  
  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-professionals bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='flex flex-col lg:h-screen lg:w-9/12 w-11/12 overflow-auto mb-[4rem]'>
          <Navbar/>
          <div className='flex flex-row lg:justify-start justify-center font-akshar gap-2 w-full lg:text-xl text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <span className='font-semibold uppercase'>Professionals</span>
          </div>
          <div className='flex flex-col w-full items-center lg:mt-[5rem] '>
            <div className={`tracking-wider text-white lg:text-[3.5rem] text-2xl my-5 font-bold text-center lg:w-1/3 w-4/6`}>
              Professionals
            </div>
            
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:items-center lg:w-9/12 w-11/12 lg:mt-[-33rem] 2xl:mt-[-42rem] mt-5'>
        <div className='text-white font-semibold tracking-widest lg:text-[1.8rem] text-2xl'>
          EXECUTIVE TEAM
          <div className='border-b border-[#B39659] lg:w-1/4 w-1/12 pt-2'></div>
        </div>
        <div className='flex lg:flex-row flex-col flex-wrap lg:gap-[4rem] w-full items-center justify-between gap-5 lg:mt-[6rem] mt-5'>
          {!loading && executiveList?.map((executive) => (
            <NavLink key={executive._id} to={`/professionals/${executive.name}`} className='flex flex-col gap-3 items-center'>
              <img src={executive.mainImageUrl} alt='logo' className='lg:w-[16rem] lg:h-[16rem] w-[12rem] h-[12rem] grayscale object-fit rounded-full' />
              <div className='text-white font-semibold tracking-wider text-2xl lg:text-[2rem]'>{executive.name}</div>
              <div className='text-[#B39659] lg:text-[1.5rem] tracking-wide font-akshar'>{executive.role}</div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center w-full'>
        <div className='border-b border-[#D1D0CF] w-full lg:my-7'></div>
      </div>

      <div className='flex flex-col lg:items-center lg:w-9/12 w-11/12 mt-10'>
        <div className='text-white font-semibold tracking-widest lg:text-[1.8rem] text-2xl'>
          LEADERSHIP TEAM
          <div className='border-b border-[#B39659] lg:w-1/4 w-1/12 pt-2'></div>
        </div>
        <div className='flex lg:flex-row flex-col flex-wrap lg:gap-[4rem] w-full items-center justify-between gap-5 lg:mt-[6rem] mt-5'>
          {!loading && leaderList?.map((leader) => (
            <NavLink key={leader._id} to={`/professionals/${leader.name}`} className='flex flex-col gap-3 items-center'>
              <img src={leader.mainImageUrl} alt='logo' className='lg:w-[16rem] lg:h-[16rem] w-[12rem] h-[12rem] grayscale object-fit rounded-full' />
              <div className='text-white font-semibold tracking-wider text-2xl lg:text-[2rem]'>{leader.name}</div>
              <div className='text-[#B39659] lg:text-[1.5rem] tracking-wide font-akshar'>{leader.role}</div>
            </NavLink>
          ))}
        </div>
      </div>
        
      <Footer/>
    </div>
  )
}

export default Professionals;