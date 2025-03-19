import { Routes, Route, useLocation} from 'react-router-dom';

import IndexRoutes from './containers/index';
import { useEffect } from 'react';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="flex flex-col items-center w-full overflow-auto h-screen">
      <Routes>
        <Route path="/*" element={<IndexRoutes/>} />
      </Routes>
    </div>
  )
}

export default App;