import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { MyProvider } from './context';
import Shop from './pages/shop';
import ShopDetail from './components/shop/shopdetail';

function App() {
  return (
    <div>
      <MyProvider>
          <Navbar/>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ShopDetail/>} />
          </Routes>
          <Footer/>
      </MyProvider>
    </div>
  );
}

export default App;
