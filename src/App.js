
import './App.css';
import Adloginscreeen from './Admin/Adloginscreen';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/signin' element={<Adloginscreeen/>} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
