import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
// import Socials from "../components/Socials";
const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen  max-w-[1480px]  m-auto px-6">
  <Navbar />
  <main className="flex-1 relative mt-20 ">
    <div className="px-10 w-full h-full">
    <Outlet />
   
   </div>
 
      <Socials />
  </main>
  {/* <Footer /> */}
</div>

  
  );
};

export default AppLayout;
