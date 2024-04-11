import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";
import { useEffect, useState } from "react";
import Pagination from "../reuseables/pagination";
import { newsQuery, newSearchQuery } from "../../utils/data";
import { client } from "../../utils/client";

export interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  body: string;
}


const News = () => {
  const [newsList, setNewList] = useState<NewInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams, setSearchParams] = useState({ page: 1, pageSize: 10, searchTerm: ''});
  
  const fetchNewsBySearch = () =>{
    const query = newSearchQuery(searchParams);
    
    client.fetch(query)
    .then((data) => {
      setNewList(data);
      setLoading(false);
    })
  }
  const fetchNews = () =>{
    client.fetch(newsQuery(searchParams))
    .then((data) => {
      setNewList(data);
      setLoading(false);
    })
  }
  
  useEffect(() => {
    setLoading(true);
    
    if(searchParams.searchTerm !== ''){
      fetchNewsBySearch();
    } else {
      fetchNews();
    }

    const countQuery = `count(*[_type == "post" && status == 'active' && type == 'news'])`

    client.fetch(countQuery)
    .then((data : number) => {
      setTotalPage(Math.ceil(data / searchParams.pageSize));
    })

    // eslint-disable-next-line
  }, [searchParams]);

  const onPageChange = (page: number) => {
    setSearchParams({...searchParams, page: page});
    fetchNewsBySearch();
  }

  const onPageSizeChange = (pageSize: number) => {
    setSearchParams({...searchParams, pageSize: pageSize});
    fetchNewsBySearch();
  }
  
  return (
    <div className='flex flex-col lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-subsidaries w-full'>
        <Navbar/>
        <div className='flex flex-row lg:justify-start justify-center playfair-font gap-2 w-full lg:px-[10rem] lg:text-lg text-white pt-10 lg:pt-[4rem]'>
          <NavLink to='/'>
            HOMEPAGE
          </NavLink>/
          <span className='font-semibold'>NEWS</span>
        </div>
        <div className='flex flex-col w-full items-center lg:mt-[5rem] lg:mb-[10rem] mb-20'>
          <div className={`leading-relaxed text-white playfair-font lg:text-[3rem] text-2xl my-5 font-bold text-center lg:w-1/3 w-4/6`}>
            News
          </div>
          <div className='text-white lg:text-[1.25rem] text-[1rem] lg:w-full w-3/4 text-center'>Welcome to the latest news and updates from EC CORP.</div>
          <div className='text-white lg:text-[1.25rem] text-[1rem] lg:w-full w-3/4 text-center'>Stay informed about our latest developments, achievements, and announcements.</div>
          <div className='bg-white p-3 mt-5 text-sm flex flex-row items-center lg:w-1/3 w-3/4 text-center'>
            <input type="text" placeholder="Search for article" value={searchParams.searchTerm}
                onChange={({ target}) => {setSearchParams({ ...searchParams, searchTerm: target.value })}} className='bg-transparent lg:text-lg w-full outline-none'/>
            <i className="fi fi-rr-search scale-x-[-1] mb-[-.4rem]"></i>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center w-full lg:px-[10rem] px-5'>
        <div className='grid lg:grid-cols-3 lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
          {!loading && newsList?.map((post) => (
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
          <div className='text-2xl playfair-font font-semibold mb-3'>No results found</div>
          <div className=''>Uh oh! It seems like we couldn't find any articles matching your search criteria at the moment. </div>
          <div className=''>Don't worry, our team is constantly updating our blog with fresh content. </div>
          <div className=''>Why not try a different search term or explore our blog categories to discover something new? Happy exploring!</div>
          <div onClick={() => {setSearchParams({ ...searchParams, searchTerm: '' })}} className='text-white border py-3 px-10 lg:text-xl font-semibold cursor-pointer gap-2 mt-5 uppercase flex flex-row items-center'>
            <i className="fi fi-rr-angle-small-left mb-[-.3rem]"></i>
            Back to blog
          </div>
        </div>
      </div>


      <Pagination currentPage={searchParams.page} dataLength={newsList.length} pageSize={searchParams.pageSize} totalPages={totalPage} onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} />
        
      <Footer/>
    </div>
  )
}

export default News;
