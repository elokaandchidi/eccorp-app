import { Routes, Route, useLocation} from 'react-router-dom';

import IndexRoutes from './containers/index';
import { useEffect } from 'react';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="App ">
      <Routes>
        <Route path="/*" element={<IndexRoutes/>} />
      </Routes>
    </div>
  )
}

export default App;