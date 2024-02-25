import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MissionsPage from './pages/MissionsPage';
import CharactersPage from './pages/CharacterPage';
import MissionDetailsPage from './pages/MissionDetailsPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import Home from './Home';
import Navbar from './components/Navbar';
import ErrorBoundary from './ErrorBoundary';

/* Direcionamento de rotas possíveis na aplicação */

function App() {
  return (
    <Router>
      <ErrorBoundary>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/missions/:id" element={<MissionDetailsPage />} />
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
        </Routes>
      </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;


