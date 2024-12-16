import { useEffect, useState } from "react";
import parse from 'html-react-parser';

import { NavLink, useParams } from "react-router-dom";

import { newsDetailMoreQuery } from "../../utils/data";
import { client } from "../../utils/client";

import { AiOutlineMail } from "react-icons/ai";
import { isMobile } from "react-device-detect";
import { serviceList } from "../../utils/service";

import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  body: Object;
  _createdAt: string;
}



const ServiceDetail = () => {
  const [newsList, setNewsList] = useState<NewInfo[]>([]);
  const {id} = useParams();  

  const serviceInfo = serviceList.find(el => el.title === id);

  useEffect(() => {
    const getNewsQuery = newsDetailMoreQuery('');

    client.fetch(getNewsQuery)
      .then((data) => {
        setNewsList(data);
      })

  }, [])
  

  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-services bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row font-akshar lg:justify-start justify-center gap-2 w-full lg:text-xl text-lg text-white pt-10 lg:pt-[4rem] lg:mb-[30rem] mb-[10rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <NavLink to='/services' className='font-semibold uppercase'>Services</NavLink>/
            <span className='font-extrabold tracking-wide uppercase'>{serviceInfo?.title}</span>
          </div>
        </div>
      </div>

      <div className={`${isMobile ? 'flex-col items-center' : 'flex-row items-start'} flex lg:w-9/12 w-11/12 lg:mt-[-25rem] mt-[-10rem]`}>
        <div className={`${isMobile ? 'hidden' : ''} font-akshar flex flex-col lg:w-1/5 gap-3 lg:items-start items-center w-3/4`}>
          <div className='text-white lg:text-[1.5rem] w-1/2 text-lg font-medium  tracking-wide'>
            CONTACT US
            <div className='border-b-2 border-[#B39659] w-4/12 pt-3'></div>
          </div>
          <div className='text-white lg:text-lg  leading-normal'>
            Email us or fill out our <br/> contact form to get started.
          </div>
          <div className='flex flex-row gap-3 lg:text-lg items-center text-[#D1D0CF]'>
            <AiOutlineMail />
            <div className='underline'>info@eccorp.ltd</div>
          </div>
          <NavLink to={'/contact'} className='bg-[#B39659] p-3 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wider uppercase flex flex-row items-center'>
            Contact Us
          </NavLink>
        </div>
        
        <div className='flex flex-col lg:w-4/5 justify-between gap-5 lg:mt-0 mt-5 text-white'>
          <div className='font-semibold lg:text-[3rem] text-[2rem] lg:text-start capitalize text-center tracking-widest'>{serviceInfo?.title}</div>
          
          <div className='w-full font-akshar leading-relaxed lg:text-[1.3rem] text-[1.2rem] mt-12'>
            {serviceInfo?.subtitle}
          </div>
          <div className='w-full font-akshar leading-relaxed lg:text-[1.3rem] text-[1.2rem]'>
            {serviceInfo?.body ? parse(serviceInfo?.body) : '---'}
          </div>
          {serviceInfo?.title === 'Data Analytics & Management' && 
            <span className='flex w-full'>
              <a target='_blank' rel="noreferrer" href='https://www.eccorp.ltd/' className='bg-[#B39659] p-3 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wider uppercase flex flex-row items-center cursor-pointer'>Click here to contact the Data Pages</a>
            </span>
          }
        </div>
      </div>

      <div className='flex flex-col lg:items-center w-full pt-5 lg:px-[15rem] px-5  lg:mb-36 mb-10'>
        <div className='text-white lg:text-[2rem] font-akshar text-xl font-semibold tracking-wider'>
          UPDATES
          <div className='border-b-2 border-[#B39659] lg:w-1/3 w-2/12 pt-3'></div>
        </div>
        <div className='grid lg:grid-cols-3 w-full lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
          {newsList?.map((post) => (
            <div className='bg-[#383838] w-full' key={post._id}>
              <div className='flex flex-col gap-4 lg:p-10 p-5'>
                <div className='text-white lg:text-[1.5rem] text-lg mb-3 font-bold line-clamp-2'>
                  {post?.title}
                </div>
                <div className='text-white lg:text-lg text-sm font-akshar leading-relaxed line-clamp-5'>
                  {post?.subtitle}
                </div>
              </div>

              <div className='flex flex-col items-center lg:gap-3 gap-1 border-t lg:py-5 py-3'>
                <NavLink to={`/updates/${post?._id}`} className='font-akshar text-[#B39659] lg:text-xl font-semibold gap-2 flex flex-row items-center'>
                  READ ARTICLE
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </NavLink>
                <div className='text-white lg:text-lg text-sm gap-2 flex flex-row items-center'>
                  <i className="fi fi-rr-hourglass-end mb-[-.3rem]"></i>
                  {post?.duration} mins read
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${newsList.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3 items-center justify-center text-white my-[5rem]`}>
          <div className='text-2xl font-akshar font-semibold mb-3'>No news found</div>
        </div>
        <div className='flex flex-row w-full justify-center items-center gap-8 mt-10'>
          <NavLink to={'/updates'} className='border border-white font-akshar p-3 px-5 lg:px-10 text-white font-semibold lg:text-lg text-sm gap-2 tracking-wider uppercase flex flex-row items-center'>
            Read More
          </NavLink>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default ServiceDetail;