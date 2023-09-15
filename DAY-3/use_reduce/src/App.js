import logo from './logo.svg';
import './App.css';
import PatientManagement from './Components/PatientManagement/PatientManagement';
import { PatientReducer } from './Components/PatientReducer/PatientReducer';

//Day-3 , 13 / 9 / 2023

function App() {
  return (
    <div className="App">
      <PatientReducer></PatientReducer>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
