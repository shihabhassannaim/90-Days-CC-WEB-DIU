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



function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
