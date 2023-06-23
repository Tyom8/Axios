import './App.css';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Click from "./Components/Click"
import Register from './Components/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Click/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;