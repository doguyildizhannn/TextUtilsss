//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  /*Link*/
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#143564';
      showAlert("Dark Mode set", "success");
      document.title = "TextUtilsss - Dark - Home";
      // setInterval(() =>{
      //   document.title = "Install TextUtilsss now";
      // }, 2000)
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode set", "success");
      document.title = "TextUtilsss - Light - Home";
    }
  }
  return (
    <div className="First">
      <Router>
        <Navbar title="TextUtilsss" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm text="Enter some text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
