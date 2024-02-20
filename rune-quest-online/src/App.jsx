import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Selection from './pages/Selection.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/selection" element={<Selection/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
