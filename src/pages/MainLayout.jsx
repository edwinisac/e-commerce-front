import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export function MainLayout({ currentLogin, setCurrentLogin }) {
  return (
    <>
      <Navbar currentLogin={currentLogin} setCurrentLogin={setCurrentLogin} />
      <Outlet/>
      <Footer/>
    </>
  );
}
