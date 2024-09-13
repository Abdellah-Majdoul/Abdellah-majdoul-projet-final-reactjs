import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { MyProvider } from './context';
import Shop from './pages/shop';
import ShopDetail from './components/shop/shopdetail';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

function App() {
  return (
    <div>
      <MyProvider>
          <Navbar/>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ShopDetail/>} />
          <Route path="/contact" element={<ContactPage/>} />
          </Routes>
          <Footer/>
      </MyProvider>
    </div>
  );
}

export default App;
