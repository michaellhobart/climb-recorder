import React, {useState} from 'react';
import './App.css';
import ClimbInputScreen  from './screens/ClimbInputScreen';
import MetricsScreen  from './screens/MetricsScreen';
import AppWrapper from './components/AppWrapper';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// const MetricsScreen = () => {
//   return (
//     <>
//       <h1>Metrics</h1>
//     </>
//   )
// }


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<ClimbInputScreen />}></Route>
          <Route path="/metrics" element={<MetricsScreen />}></Route>
        </Routes>
      </Router>
        
    </AppWrapper>
  );
}

export default App;
