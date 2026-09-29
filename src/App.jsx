import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Resister/Register";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Why from "../Components/Why/Why"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="why-us" element={<Why />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
