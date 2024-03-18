import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { client } from "../../utils/client";
import { announcementQuery, newsDetailMoreQuery } from "../../utils/data";

import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import ectcLogo from '../../assets/images/ectc_logo.svg';
import bgImg from '../../assets/images/bg_home.png';


interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  mainImageUrl?: string;
  body: Object;
  _createdAt: string;
}

const Home = () => {
  const [newsList, setNewsList] = useState<NewInfo[]>([]);
  const [announcementList, setAnnouncementList] = useState<NewInfo[]>([]);
  
  useEffect(() => {
    const getNewsQuery = newsDetailMoreQuery('');
    
    client.fetch(getNewsQuery)
    .then((data) => {
      setNewsList(data);
    })    
  
    const getAnnouncementQuery = announcementQuery();
    
    client.fetch(getAnnouncementQuery)
    .then((data) => {    
      setAnnouncementList(data);
    })
  }, [])
  

  
  return (
    <div className='flex flex-col lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-home bg-cover w-full'>
        <Navbar/>

        <div className='flex flex-col lg:gap-10 gap-6 w-full items-center lg:my-[7rem] mb-10'>
          <div className={`leading-relaxed text-white playfair-font lg:text-[3rem] text-3xl mt-5 font-bold text-center lg:w-1/3 w-4/6`}>
            Empowering <span className='text-[#B39659]'>Innovations</span> to Enrich <span className='text-[#B39659]'>Lives</span>
          </div>
          <div className='text-white lg:text-lg text-sm'>EC CORP is an IT powered company</div>
          <div className='flex lg:flex-row flex-col items-center lg:gap-8 gap-5'>
            <a href="#about" className='bg-[#B39659] p-3 px-5 text-white font-semibold text-sm lg:text-xl'>ABOUT THE CORP</a>
            <NavLink to='/subsidaries' className='border border-white p-3 px-5 text-white font-semibold text-sm lg:text-xl'>THE SUBSIDIARIES</NavLink>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className='text-white lg:text-3xl font-semibold playfair-font tracking-wide'>SUBSIDIARIES</div>
        <div className='flex lg:flex-row flex-col lg:items-end lg:justify-center w-full lg:gap-[4rem] gap-10 mt-10'>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-[4rem] text-white montserrat-font'>bloo<span className='text-orange-700'>.</span><span className='font-semibold'>market</span></div>
            <div className='text-white playfair-font'>Established 2023</div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <img src={ectcLogo} alt='logo' className='w-[15rem]'/>
            <div className='text-white playfair-font'>Established 2013</div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='text-[5rem] text-white'>vYe</div>
            <div className='text-white playfair-font'>Established 2023</div>
          </div>
        </div>
      </div>
      <div className='w-full px-5 pt-10 lg:p-10 lg:px-[10rem]'>
        <div className='border-b border-[#B39659]'></div>
      </div>
      <div id="about" className='flex lg:flex-row flex-col gap-5 justify-between items-center w-full lg:px-[10rem] px-5'>
        <div className='flex flex-col lg:w-3/5 gap-3 lg:text-lg text-sm'>
          <div className='text-white playfair-font lg:text-[2rem] text-xl tracking-wider lg:text-left text-center mb-5 font-bold'>
            About EC CORP
          </div>
          <div className='text-white lg:w-3/4'>
            EC Corp. is a global technology company established by Eloka Amobi and Chidi Nlewedim in 2023. It is the parent company of ECTC LTD, bloo.market and Vye. EC Corp was created to reflect its expansion in IT consulting and technology products.
          </div>
          <div className='text-white lg:w-3/4'>
            EC Corp. operates in United Kingdom and Europe, and recently commenced expansion into USA and Africa and Middle East, through its subsidiaries. EC Corp invests in numerous social impact programmes globally, such as partnering with Amobi Leadership, TechforNigeria and many other organisations.
          </div>
          <div className='flex lg:justify-start justify-center lg:mt-5 mt-2'>
            <NavLink to='/about' className='border border-white p-3 lg:px-20 px-[3rem] text-white font-semibold lg:text-lg text-xs'>READ MORE</NavLink>
          </div>
        </div>
        <div className='lg:w-2/5 flex flex-col items-end'>
          <img src={bgImg} alt='img' className='w-full'/>
        </div>
      </div>
      <div className='flex flex-col items-center w-full lg:px-[10rem] px-5'>
        <div className='text-white lg:text-[2rem] text-lg font-semibold playfair-font tracking-wide'>NEWS</div>
        <div className='grid lg:grid-cols-3 lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
          {newsList?.map((post) => (
            <div className='bg-[#383838]' key={post._id}>
              <div className='flex flex-col gap-4 lg:p-10 p-5'>
                <div className='text-white playfair-font lg:text-[1.5rem] text-lg mb-3 font-bold line-clamp-2'>
                  {post?.title}
                </div>
                <div className='text-white lg:w-4/5 lg:text-lg text-sm line-clamp-5'>
                  {post?.subtitle}
                </div>
              </div>

              <div className='flex flex-col items-center lg:gap-3 gap-1 border-t lg:py-5 py-3'>
                <NavLink to={`/news/${post?._id}`} className='text-[#B39659] lg:text-xl font-semibold gap-2 flex flex-row items-center'>
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
          <div className='text-2xl playfair-font font-semibold mb-3'>No news found</div>
        </div>
        <div className='flex flex-row items-center gap-8 mt-10'>
          <NavLink to={'/news'} className='bg-[#B39659] p-3 px-5 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wider uppercase flex flex-row items-center'>
            View all articles
            <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col items-center w-full lg:px-[10rem] px-5'>
        <div className='text-white lg:text-[2rem] text-lg font-semibold playfair-font tracking-wide'>ANNOUNCEMENTS</div>
        <div className='grid lg:grid-cols-3 lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
          {announcementList.map((post: NewInfo) => (
              <div className="bg-[#383838] flex flex-col items-center" key={post._id}>
                <div className="flex flex-col items-center w-full gap-4 lg:p-10 p-5">
                  <img src={post.mainImageUrl} alt={post.title} />
                  <div className="flex flex-col items-center w-full gap-4">
                    <div className="text-white playfair-font lg:text-[1.5rem] text-lg mb-3 font-bold line-clamp-2">
                      {post?.title}
                    </div>
                    <div className="text-white lg:text-lg text-sm line-clamp-2">{post?.subtitle}</div>
                  </div>
                </div>
      
                <div className="flex flex-col w-full items-center lg:gap-3 gap-1 border-t lg:py-5 py-3">
                  <NavLink to={`/news/${post?._id}`} className="text-[#B39659] lg:text-xl font-semibold gap-2 flex flex-row items-center">
                    READ ARTICLE
                    <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                  </NavLink>
                  <div className="text-white lg:text-lg text-sm gap-2 flex flex-row items-center">
                    <i className="fi fi-rr-hourglass-end mb-[-.3rem]"></i>
                    {post?.duration} mins read
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={`${announcementList.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3 items-center justify-center text-white my-[5rem]`}>
          <div className='text-2xl playfair-font font-semibold mb-3'>No announcement found</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
