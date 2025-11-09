

import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import ShowAlert from './Components/ShowAlert';
import Footer from './Components/Footer';
// import BGVideo from "./Video/video.mp4"

// import SignUP from './Components/SignUP';





// ----------------------------------------import react router--------------------------------------------------
import {
  BrowserRouter as Router,
  
  Route,
  Routes

} from "react-router-dom";

// -------------------------------------------------------------------------------------------------------------------




function App() {

  
  
  // -------------------------------------------------------Switch Button-----------------------------------------------------
  const [Mode, setMode] = useState('secondary')
  const [inputMode, setinputMode] = useState('light')
  const [text, settext] = useState('dark')    
  const [moon, setmoon] = useState('black')    
  const toogleMode = () =>{

    if(Mode === "secondary"){
      setMode('dark');
      settext('light');
      setinputMode('dark');
      setmoon('orange')
      document.body.style.backgroundColor="#343a40";
      showAlert("Dark mode has been enabled", "Success");
     
    }
    else{
      setMode('secondary');
      settext('dark');
      setinputMode('light');
      setmoon('black')
      document.body.style.backgroundColor="#ced4da";
      showAlert("Light mode has been enabled", "Success");
     }
    }
    // -----------------------------------------------------------------------------------------------------------------------------
    
    
    // -------------------------------------------------------Alert-----------------------------------------------------
    const [alert, setalert] = useState(null)
    const showAlert = (message, type) =>{
     
      setalert({
        message : message,
        type: type
      })
      setTimeout(( )=>{
       setalert(null)
      }, 1500)
    }
    // -----------------------------------------------------------------------------------------------------------------------------
    
    
    return (
      <>

{/* <div className="container-fluid"> */}
        {/* </div> */}
              <Router>

              {/* --------------------------------------------------------------NavBar----------------------------------------------------------*/}
              <Navbar title= "Play Text" Mode={Mode} text={text} toogleMode={toogleMode} moon={moon}/> 
              <hr />
              {/* ----------------------------------------------------------------------------------------------------------------------------- */}


              {/* --------------------------------------------------------------Alert----------------------------------------------------------*/}
              <ShowAlert alert= {alert} />
              {/* ----------------------------------------------------------------------------------------------------------------------------- */}


              <Routes>
                <Route path="/" element={<Text showAlert={showAlert} Mode={inputMode}  text={text} title="Convert your sentence into UpperCase"  value="Enter your text here"/>} />
                {/* <Route path="/text" element={} /> */}
                {/* <Route path='/SignUP'  element={<SignUP />} /> */}
              </Routes>

            
                  <Footer />
      </Router>
    </>
   
  );
}

export default App;
