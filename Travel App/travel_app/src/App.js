import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Components/NoPage/NoPage';


function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Home" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
