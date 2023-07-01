import './App.css';
import BlogPage from './compornetns/BlogPage';
import Header from './compornetns/Header';
import HomePage from './compornetns/HomePage';
import { BrowserRouter as Router, Route, Rputes } from 'react-router-dom';
import { Routes } from 'react-router-dom';


function App() {

  return (
   <Router>
     <div className='App'>
      <Header />

      <Routes>
        <Route path='myPage' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
