import React from 'react';
import Header from './components/generic/header';
import Footer from './components/generic/footer';
import Router from './components/routing/router'

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="text">
          <Router />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
