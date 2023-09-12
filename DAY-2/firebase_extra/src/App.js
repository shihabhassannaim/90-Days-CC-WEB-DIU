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

function App() {
 const userContext = createContext();

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <h1>Name : {loggedInUser.name}</h1>
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