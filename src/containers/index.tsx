import {useEffect, useState}  from 'react';
import { Routes, Route } from 'react-router-dom';

import Onboarding from '../components/onboarding/index'
import {Home, About, Subsidaries, NotFound, NewsDetail, News} from '../components/pages/_route';

const IndexRoutes = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
}, [])

  if (loading) {
    return <Onboarding/>
  }
  
  return (
    <div className={`flex flex-row w-full h-full bg-[#1e1e1e]`}>      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news/:id" element={<NewsDetail/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/subsidaries" element={<Subsidaries/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default IndexRoutes;