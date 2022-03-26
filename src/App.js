import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    
    <>
    
    <BrowserRouter>
    <Navbar title="TextUtils" mode = {darkMode} toggle={toggleMode}/>
    <Alert alert={alert} />
      <Routes>
          <Route exact path="/" element={
            <TextForm mode = {darkMode} showAlert={showAlert} heading = "Try TextUtils- Word Counter, Character Counter, Remove exta spaces"/>
          }/>
          <Route exact path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
