import React, { useState } from 'react';

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Message from './components/Message';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {

  const [page, setPage] = useState('/');


  function pageSwitch() {
    switch (page) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/message':
        return <Message />
      case '/projects':
        return <Projects />
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <header>
        <Nav setWhale={setPage} />
      </header>
      <main className='bg-dark text-tertiary mx-auto flex-row justify-center w-full mb-25 sm:mb-0'>
        {pageSwitch()}
      </main>
      <footer className='bg-primary flex-row text-secondary fixed bottom-0 mx-auto py-2 w-full justify-center'>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
