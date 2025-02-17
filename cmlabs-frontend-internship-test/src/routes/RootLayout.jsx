import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return ( 
    <>
      <Navbar />
      <main className='h-full'>
        <Outlet />
      </main>
    </>
   );
}
 
export default RootLayout;