import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Message from './components/Message';
import Contact from './components/Contact';
import Projects from './components/Projects';
import background from './assets/cenote.jpg'


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
    <div className='w-screen h-screen bg-scroll bg-cover' style={{backgroundImage: `url(${background})`}}>
      <header>
        <Nav setWhale={setPage} />
      </header>
      <main className='text-tertiary mx-auto flex-row justify-center w-full h-full pb-3'>
        {pageSwitch()}
      </main>
      <footer className='bg-primary flex-row w-full justify-center pt-2 pb-1 shrink mb-0'>
        <Contact />
      </footer>
    </div>
  );
}

export default App;


