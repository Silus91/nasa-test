import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import ReactDOM from "react-dom";
import Home from "./components/Home/Home";
import Display from "./pages/Display/Display";
import Loader from "./components/Loader/Loader";
import StoreContextProvider from "./context/StoreContext";

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
    <Loader />
      <Router>
        <Routes>
          <Route  path="/display" element={<Display />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
     </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
