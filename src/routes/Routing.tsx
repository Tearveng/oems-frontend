import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import Dashboard from '@/pages/Dashbaord/Dashboard';
import Home from '@/pages/Home/Home';
import UnAuthorize from '@/themes/UnAthorize';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/login" element={<UnAuthorize><Login /></UnAuthorize>} />
      <Route path="/register" element={<UnAuthorize><Register /></UnAuthorize>} />
      <Route path="*" element={<>NOT FOUND</>} />
    </Routes>
  );
};

export default Routing;
