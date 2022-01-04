import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AuthProvider from './contexts/AuthProvider';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ResetPassword from './pages/ResetPassword';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import PageNotFound from './pages/notFoundPage/PageNotFound';

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
