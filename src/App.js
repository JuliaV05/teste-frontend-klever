import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import Home from './pages/Home';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/addToken' element={<AddToken />} />
      <Route exact path='/editToken' element={<EditToken />} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;
