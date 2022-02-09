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

function App() {
  return (
    <AppWrapper>
        <Routes>
          <Route path="/" element={<ClimbInputScreen />}></Route>
          <Route path="/metrics" element={<MetricsScreen />}></Route>
        </Routes>
    </AppWrapper>
  );
}

export default App;
