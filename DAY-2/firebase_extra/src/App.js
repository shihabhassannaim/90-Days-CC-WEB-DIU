import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import { createContext, useContext, useState } from "react";

//Day-2 , 12 / 9 / 2023
export const userContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;