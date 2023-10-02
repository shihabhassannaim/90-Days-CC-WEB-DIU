import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import NoPage from './Components/NoPage/NoPage';
import { createContext, useState } from 'react';


export const userContext = createContext();

function App() {
  const [Carousel, setCarousel] = useState(0);
  return (
    <userContext.Provider value={[Carousel , setCarousel]}>
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </userContext.Provider>   
  );
}

export default App ;
