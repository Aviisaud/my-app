
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState} from 'react';
import Alert from './components/Alert';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Dark Mode enabled
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setBtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#434C55";
      showAlert('Dark mode has been enabled', 'success');
      // document.title = "TextUtils- Dark Mode"
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils- Home"
      // }, 3000);
    }
    else{
      setMode('light');
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success');
      // document.title = "TextUtils- Home"
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          <TextForm showAlert={showAlert} heading1="Enter the text to analyse" mode={mode} alert={alert} />
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
