import React from 'react';
import Banner from './Components/HomeBanner';
import Navbar from "./features/navbar/Navbar";
import LoginForm from './features/login/Login';
import SignUpForm from './features/signup/SingUp';
import Footer from "./Components/Footer";
import {
  Routes,
  Route,
} from "react-router-dom";
import CustomerReview from './Components/CustomerReview';
import CustomAlert from './features/customalert/CustomAlert';


const Home = () => {
  return (
    <React.Fragment>
        <Banner/>
        <CustomerReview/>
    </React.Fragment>
  )
}

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CustomAlert/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
