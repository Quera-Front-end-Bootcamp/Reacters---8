import './App.css';
import { Routes, Route } from 'react-router-dom';

import Course from './pages/course/course';

function App() {
  return (
    <div className="App">
      {/* <div className="flex justify-center"> */}
        {/* <p className="text-red-300 font-bold">Hellloooooo</p> */}
        <Course></Course>
      {/* </div> */}
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
