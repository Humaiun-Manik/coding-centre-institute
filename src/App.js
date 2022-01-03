import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AuthProvider from './contexts/AuthProvider';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
