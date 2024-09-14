import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { MyProvider } from './context';
import Shop from './pages/shop';
import ShopDetail from './components/shop/shopdetail';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import AccueilPage from './pages/accueil';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

function App() {
  return (
    <div>
      <MyProvider>
          <Navbar/>
          <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ShopDetail/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/" element={<AccueilPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          </Routes>
          <Footer/>
      </MyProvider>
    </div>
  );
}

export default App;
