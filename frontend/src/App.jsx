import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import AdminProfile from "./pages/admin/adminProfile";
import Navbar from "./components/navbar";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Footer from "./components/footer";
import UserProfile from "./pages/user/userProfile"
import UserDashboard from "./pages/user/userDashboard"

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/admin/profile","/user/profile", "/user/dashboard"];
  const hideFooterPaths = ["/admin/profile", "/login","/signup", "/user/profile","/user/dashboard"];


  const shouldShowNavbar = !hideNavbarPaths.some(path => location.pathname.startsWith(path));
  const shouldShowFooter = !hideFooterPaths.some(path => location.pathname.startsWith(path));


  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />

      </Routes>

      {shouldShowFooter && <Footer />}

    </>
  );
}

export default App;
