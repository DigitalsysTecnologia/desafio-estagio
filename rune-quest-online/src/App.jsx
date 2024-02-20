import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Selection from './pages/Selection.jsx';
import NoPage from './pages/NoPage.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/selection" element={<Selection/>}/>
        <Route path="/404" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
