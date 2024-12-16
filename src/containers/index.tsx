import {useEffect, useState}  from 'react';
import { Routes, Route } from 'react-router-dom';

import { AlertProvider } from '../utils/notification/alertcontext';
import Alert from '../utils/notification/alert';

import Onboarding from '../components/onboarding/index'
import {Home, About, NotFound, NewsDetail, News, Professionals, ProfessionalDetail, ServiceDetail, Services, Clients, Contact, Career} from '../components/pages/_route';

const IndexRoutes = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
}, [])

  if (loading) {
    return <Onboarding/>
  }
  
  return (
    <div className={`flex flex-row w-full h-full bg-[#1e1e1e]`}>
      <AlertProvider>
        <Alert />  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/updates/:id" element={<NewsDetail/>} />
          <Route path="/updates" element={<News/>} />
          <Route path="/professionals" element={<Professionals/>} />
          <Route path="/professionals/:id" element={<ProfessionalDetail/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services/:id" element={<ServiceDetail/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </AlertProvider>
    </div>
  )
}

export default IndexRoutes;