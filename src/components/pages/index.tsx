import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";


import { client } from "../../utils/client";
import { newsDetailMoreQuery } from "../../utils/data";

import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import bgImg from '../../assets/images/bg_img_home2.svg';
import ImageEamon from '../../assets/images/eamon.jpg';
import ImageChidi from '../../assets/images/chidi.png';
import ImageEddy from '../../assets/images/eddy.jpg';
import { isMobile } from "react-device-detect";
import { AiOutlineMail } from "react-icons/ai";
import { FaAsterisk } from "react-icons/fa6";
import Disclaimer from "../reuseables/disclaimer";
import { useAlert } from "../../utils/notification/alertcontext";
import { EMAIL_REGEX } from "../../utils/regex";


interface NewInfo {
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  mainImageUrl?: string;
  body: Object;
  _createdAt: string;
}

interface ContactDocument {
  _type: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Home = () => {
  const { addAlert } = useAlert();
  const [newsList, setNewsList] = useState<NewInfo[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handleDisclaimerPopUp, setHandleDisclaimerPopUp] = useState(false);
  const [formInfo, setFormInfo] = useState({name: '', email: '', phone: '', message:''});
  

  const handleToggleModal = (newValue : boolean) => {    
    setHandleDisclaimerPopUp(newValue);
  };

  const handleSubmit = async () => {  
    setIsSubmitting(true);
    const { name, email, phone, message} = formInfo;
  
    const requiredFields = [
      { field: email, message: 'Please add email' },
      { field: phone, message: 'Please add mobile' },
      { field: name, message: 'Please add price' },
      { field: message, message: 'Please select message' },
    ];
  
    for (const { field, message } of requiredFields) {
      if (!field) {
        setIsSubmitting(false);
        return addAlert({ message, type: 'error' });
      }
    }

    if(!EMAIL_REGEX.test(email)) {
      setIsSubmitting(false);
      return addAlert({ message:'Invalid email provided', type: 'error' });
    }
    
    
    let doc: ContactDocument = {
      _type: 'contact',
      name,
      email,
      phone,
      message
    };  
    
    try {
      await client.create(doc)
      setFormInfo({name: '', email: '', phone: '', message:''})
      setIsSubmitting(false);
      addAlert({ message: 'Contact form submitted successfully', type: 'success' });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      addAlert({ message:'error occurred while submitting form', type: 'error' });
    }
  };

  useEffect(() => {
    const getNewsQuery = newsDetailMoreQuery('');

    client.fetch(getNewsQuery)
      .then((data) => {
        setNewsList(data);
      })
  }, [])

    
  if (handleDisclaimerPopUp) {
    return <Disclaimer handleToggleModal={handleToggleModal}/>
  }

  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-7 w-full'>
      <div className='bg-home bg-cover bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-col lg:gap-10 gap-8 w-full items-start lg:my-[7rem] mb-10'>
            <div className={`${isMobile ? 'flex-col mt-5' : 'flex-row mt-[10rem]'} flex lg:gap-10 gap-8 w-full items-start justify-between`}>
              <div className={`flex flex-col lg:w-2/3 lg:gap-12 text-white leading-relaxed tracking-widest lg:text-[3.5rem] text-3xl font-bold`}>
                <div>Integrating Profound Technological <br/> Experience with Advanced Business Insight.</div>
              </div>
              <NavLink to='/contact' className='border border-white lg:mt-4 p-3 px-10 text-white tracking-wide font-akshar uppercase font-semibold text-sm lg:text-xl'>Contact us</NavLink>
            </div>
            <div className='flex flex-col w-full items-start lg:mt-20 lg:gap-8 gap-6'>
              <div className='text-white font-akshar text-[1.3rem]'>
                LED BY
                <div className='border-b border-[#B39659] pt-2'></div>
              </div>
              <div className={`${isMobile ? 'flex-col gap-3' : 'flex-row gap-7'} flex`}>
                <div className='flex flex-row gap-3 items-center'>
                  <img src={ImageEddy} alt='logo' className='w-20 h-20 object-cover rounded-full grayscale' />
                  <div className='text-white lg:text-[1.5rem] text-[1.2rem] leading-tight tracking-wide'>Eddy Jawed, <br/> Chief Executive Officer</div>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                  <img src={ImageChidi} alt='logo' className='w-20 h-20 object-cover rounded-full grayscale' />
                  <div className='text-white lg:text-[1.5rem] text-[1.2rem] leading-tight tracking-wide'>Chidi Nlewedim, <br/> Founder/Chief Data Officer</div>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                  <img src={ImageEamon} alt='logo' className='w-20 h-20 object-cover rounded-full grayscale' />
                  <div className='text-white lg:text-[1.5rem] text-[1.2rem] leading-tight tracking-wide'>Eloka Amobi,<br/> Founder/Chief Product Officer</div>
                </div>
                <NavLink to='/professionals' className='flex flex-row gap-2 items-center'>
                  <div  className={`${isMobile ? '' : 'hidden'} text-[#B39659] font-semibold`}>VIEW</div>
                  <BsChevronRight className="lg:text-[2rem] lg:mt-1 text-[#B39659]"/>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:items-center lg:w-9/12 w-11/12 pt-5'>
        <div className='text-white lg:text-[2rem] font-akshar text-lg font-semibold tracking-wider'>
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
        <div className={`${newsList.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3 font-akshar items-center justify-center text-white my-[5rem]`}>
          <div className='text-2xl font-semibold mb-3'>No news found</div>
        </div>
        <div className='flex flex-row w-full justify-center items-center gap-8 mt-10'>
          <NavLink to={'/updates'} className='bg-[#B39659] font-akshar p-3 px-5 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wider uppercase flex flex-row items-center'>
            View all updates
          </NavLink>
        </div>
      </div>
      <div className='flex flex-row lg:w-9/12 w-11/12 gap-[4rem] pt-5'>
        <img src={bgImg} alt='logo' className={`${isMobile ? 'hidden' : ''} grayscale w-1/3`} />
        <div className='flex flex-col lg:w-3/5 w-full'>
          <div className='text-white lg:text-[1.5rem] w-1/2 text-lg font-semibold  tracking-wide'>
            ENQUIRE
            <div className='border-b-2 border-[#B39659] lg:w-1/12 w-3/12 pt-3'></div>
          </div>
          <div className='flex flex-row gap-3 lg:text-lg mt-3 items-center text-[#D1D0CF]'>
            <AiOutlineMail />
            <div className='underline'>info@eccorp.ltd</div>
          </div>
          <div className='flex flex-col gap-6 mt-5 w-full text-white'>
            <div className='grid lg:grid-cols-2 grid-cols-1 font-akshar gap-5 items-center'>
              <div className='flex flex-col'>
                <input value={formInfo.name} onChange={({ target}) => {setFormInfo({ ...formInfo, name: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Name *' type='text'/>
              </div>
              <div className='flex flex-col'>
                <input value={formInfo.email} onChange={({ target}) => {setFormInfo({ ...formInfo, email: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Email *' type='email'/>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 font-akshar gap-4 items-center'>
              <div className='flex flex-col'>
                <input value={formInfo.phone} onChange={({ target}) => {setFormInfo({ ...formInfo, phone: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Phone *' type='text'/>
              </div>
            </div>
            <div className='flex flex-col font-akshar'>
              <textarea value={formInfo.message} onChange={({ target}) => {setFormInfo({ ...formInfo, message: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Message *'/>
            </div>
            <div className='flex flex-col font-akshar lg:items-start items-center mt-7 w-full'>
              <div onClick={handleSubmit} className='lg:w-1/3 w-1/2 border border-white p-3 cursor-pointer text-center text-white uppercase font-semibold text-sm lg:text-xl'>{!isSubmitting ? 'SUBMIT' : 'Submitting ....'}</div>
            </div>
            <div onClick={() => setHandleDisclaimerPopUp(!handleDisclaimerPopUp)} className='flex flex-row gap-3 lg:mt-9 mt-4 lg:mb-0 mb-14 items-center cursor-pointer'>
              <FaAsterisk />
              <div className=''>Read disclaimer</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;