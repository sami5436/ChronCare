import { Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";
import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import AdminProfile from "./pages/admin/adminProfile";
import Navbar from "./components/navbar";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Footer from "./components/footer";
import UserProfile from "./pages/user/userProfile";
import UserDashboard from "./pages/user/userDashboard";
import Sidebar from "./components/sidebar";

function App() {
  const location = useLocation();

  const shouldShowNavbar = useMemo(() => {
    return !["/admin/profile", "/user/profile", "/user/dashboard"].includes(location.pathname);
  }, [location.pathname]);

  const shouldShowFooter = useMemo(() => {
    return !["/admin/profile", "/login", "/signup", "/user/profile", "/user/dashboard"].includes(location.pathname);
  }, [location.pathname]);

  const shouldShowSidebar = useMemo(() => {
    return ["/user/profile", "/user/dashboard"].includes(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowSidebar && <Sidebar />}

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
