import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
