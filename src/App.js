import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { MyProvider } from './context';
import Shop from './pages/shop';

function App() {
  return (
    <div>
      <MyProvider>
          <Navbar/>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop/>} />
          </Routes>
          <Footer/>
      </MyProvider>
    </div>
  );
}

export default App;
