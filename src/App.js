import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { MyProvider } from './context';

function App() {
  return (
    <div>
      <MyProvider>
          <Navbar/>
          <Routes>
          <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer/>
      </MyProvider>
    </div>
  );
}

export default App;
