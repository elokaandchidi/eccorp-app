import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import BlockContent from '@sanity/block-content-to-react';
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";
import { postDetailQuery, newsDetailMoreQuery } from "../../utils/data";
import { client } from "../../utils/client";
import { config } from '../../utils/config';
import { formatDate } from "../../utils/common";

export interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  body: Object;
  _createdAt: string;
}


const NewsDetail = () => {
  const [postDetail, setPostDetail] = useState<NewInfo>({_id: "", title: "", subtitle: "", body: "", _createdAt: ""});
  const [postDetailMore, setPostDetailMore] = useState<NewInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  const formatImage = (value: string) =>{    
    return value?.replace(/image-/g, "").replace(/-png/g, ".png").replace(/-svg/g, ".svg");
  }   
  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props?.node.language}>
          <code>{props?.node.code}</code>
        </pre>
      ),
      image: (props: any) => (
        <img
          src={`https://cdn.sanity.io/images/${config.sanity.projectId}/production/${formatImage(props?.node.asset._ref)}`}
          alt={props.node.alt}
        />
      ),
    },
  }

  useEffect(() => {
    setLoading(true);
    
    if(id){
      const getPostDetailquery = postDetailQuery(id);
    
      client.fetch(getPostDetailquery)
      .then((data) => {
        setPostDetail(data[0]);
        setLoading(false);
      })

      const getMorePostquery = newsDetailMoreQuery(id);
    
      client.fetch(getMorePostquery)
      .then((data) => {
        setPostDetailMore(data);
        setLoading(false);
      })
    }
    
  }, [id])
  

  return (
    <div className='flex flex-col lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-subsidaries w-full'>
        <Navbar/>
        <div className='flex flex-row lg:justify-start justify-center playfair-font gap-2 w-full lg:px-[10rem] px-5 lg:text-lg text-sm text-white pt-10 lg:pt-[4rem]'>
          <NavLink to='/'>
            HOMEPAGE
          </NavLink>/
          <NavLink to='/news' className='font-semibold'>NEWS</NavLink>/
          <span className='font-extrabold tracking-wide'>{postDetail?.title}</span>
        </div>
        <div className='flex flex-col w-full items-center lg:mt-[5rem] mt-10 lg:mb-[10rem] mb-20'>
          <div className='text-white lg:text-lg text-sm gap-2 flex flex-row items-center'>
            <i className="fi fi-rr-hourglass-end mb-[-.3rem]"></i>
            3 mins read
          </div>
          <div className={`leading-relaxed text-white playfair-font lg:text-[3rem] text-2xl my-3 font-bold text-center`}>
            {postDetail?.title}
          </div>
          <div className='text-white lg:text-lg text-sm lg:w-full w-3/4 text-center'>{formatDate(postDetail?._createdAt)}</div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full lg:px-[10rem] px-5'>
        <div className='flex lg:flex-row flex-col-reverse gap-10 w-full'>
          <div className='lg:w-1/5 flex lg:flex-col gap-5 text-white'>
            <span>SHARE</span>
            <FaInstagram className='text-2xl' />
            <FaSquareFacebook className='text-2xl' />
            <i className="fi fi-rr-envelope text-2xl mb-[-.3rem]"></i>
          
          </div>
          <div className='lg:w-2/3 lg:text-xl text-white'>
            <BlockContent blocks={postDetail?.body} serializers={serializers} />
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex flex-col gap-3 lg:text-lg text-sm'>
          <div className='text-white playfair-font lg:text-[3rem] text-[1.7rem] leading-relaxed tracking-wider text-left font-bold'>
            More for You
          </div>
          <div className='grid lg:grid-cols-3 lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
            {postDetailMore?.map((post) => (
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
                    3 mins read
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
        
      <Footer/>
    </div>
  )
}

export default NewsDetail;
