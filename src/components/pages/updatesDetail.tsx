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

interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  body: Object;
  _createdAt: string;
}


const NewsDetail = () => {
  const [postDetail, setPostDetail] = useState<NewInfo>({_id: "", title: "", duration: "", subtitle: "", body: "", _createdAt: ""});
  const [postDetailMore, setPostDetailMore] = useState<NewInfo[]>([]);
  const {id} = useParams();

  const formatImage = (value: string) =>{    
    return value?.replace(/image-/g, "").replace(/-png/g, ".png").replace(/-svg/g, ".svg");
  }   
  const serializers = {
    list: (props: any) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return <ul className='list-disc list-outside py-5 pl-[3rem]'>{props.children}</ul>;
      }
      return <ol className='list-disc list-inside'>{props.children}</ol>;
    },
    listItem: (props: any) => <li>{props.children}</li>,
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
    if(id){
      const getPostDetailquery = postDetailQuery(id);

      client.fetch(getPostDetailquery)
      .then((data) => {
        setPostDetail(data[0]);
      })

      const getMorePostquery = newsDetailMoreQuery(id);

      client.fetch(getMorePostquery)
      .then((data) => {
        setPostDetailMore(data);
      })
    }

  }, [id])


  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-update bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='h-full lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row font-akshar lg:justify-start justify-center  gap-2 w-full lg:text-lg text-sm text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <NavLink to='/updates' className='font-semibold'>UPDATES</NavLink>/
            <span className='font-extrabold tracking-wide'>{postDetail?.title}</span>
          </div>
          <div className='flex flex-col w-full items-center lg:mt-[5rem] mt-10 lg:mb-[10rem] mb-20'>
            <div className='text-white font-akshar lg:text-lg text-sm gap-2 flex flex-row items-center'>
              <i className="fi fi-rr-hourglass-end mb-[-.3rem]"></i>
              {postDetail?.duration} mins read
            </div>
            <div className={`leading-relaxed tracking-widest text-white  lg:text-[3rem] text-3xl my-3 font-bold text-center`}>
              {postDetail?.title}
            </div>
            <div className='text-white font-akshar lg:text-lg text-sm lg:w-full w-3/4 text-center'>{formatDate(postDetail?._createdAt)}</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center lg:w-9/12 w-11/12'>
        <div className='flex flex-col gap-10 items-center w-full'>
          <div className='lg:w-2/3 lg:text-xl text-white'>
            <BlockContent className='leading-relaxed font-akshar' blocks={postDetail?.body} serializers={serializers} />
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start lg:w-9/12 w-11/12'>
        <div className='flex flex-col w-full gap-3 lg:text-lg text-sm'>
          <div className='text-white  lg:text-[3rem] text-[1.7rem] leading-relaxed tracking-wider text-left font-bold'>
            More for You
          </div>
          <div className='grid lg:grid-cols-3 lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
            {postDetailMore?.map((post) => (
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

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default NewsDetail;