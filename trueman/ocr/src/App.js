import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Intro from './Intro';
import Drugs from './Drugs';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/start' element={<Drugs/>}/>
       </Routes>
    </div>
  );
}

export default App;
