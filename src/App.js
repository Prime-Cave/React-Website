import React from 'react';
import PageWrapper from './components/PageWrapper';
import{BrowserRouter as Router,Route, } from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contacts from './components/Pages/Contacts'



function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Home} />

          <Route exact={true} path="/about" component={About} />

          <Route exact={true} path="/contact" component={Contacts} />
          
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
