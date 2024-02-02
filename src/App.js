import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Course';
import Cart from './pages/Cart';
import NavBar from './Component/Header';
import Footer from './Component/Footer';

const App = () => {
  return (<>
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  </>
  );
};

export default App;
