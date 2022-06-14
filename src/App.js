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
    <div className='w-screen h-screen'>
      <header className='sticky'>
        <Nav setWhale={setPage} />
      </header>
      <main className='mx-auto flex-row justify-center w-full h-full pb-[350px] overflow-scroll'>
        {pageSwitch()}
      </main>
      <footer className='bg-primary w-screen flex-row justify-center pt-2 pb-1 shrink bottom-0 fixed z-0'>
        <Contact />
      </footer>
    </div>
  );
}

export default App;


