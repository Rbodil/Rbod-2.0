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
    <div className='backdrop-saturate-200 bg-fixed'>
      <header>
        <Nav setWhale={setPage} />
      </header>
      <main className='text-tertiary mx-auto flex-row justify-center w-full'>
        {pageSwitch()}
      </main>
      <footer className='bg-primary flex-row text-secondary fixed mb-0 w-full mx-auto justify-center pt-2 pb-1 mb-0 shrink'>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
