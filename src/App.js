import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import {Aboutus} from './components/Footer/AboutUs';
import Header  from './components/Header/Header';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route  path="/" component={    <div><div className="h-150">helo</div>
      <div className="h-150">helo</div>
      <div className="h-150">helo</div>
      <div className="h-150">helo</div>
      <div className="h-150">helo</div>
      <div className="h-150">helo</div>/</div>} />
       <Route  path="/Aboutus" component={<Aboutus />} />
       <Route  path="*" component={ <div>pagenotfound</div>} />

        {/* <Route path="/contact" component={Contact} />  */}
        {/* <Route component={Notfound} /> */}
      </Routes>
    

      <Footer ></Footer>
    </div>
  );
}

export default App;
