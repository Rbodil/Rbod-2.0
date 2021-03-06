import React from 'react';
import Repo from '../Repo'



function Projects() {
    // make repo card component, make tiles set classname to Card 
    // repo => object, then map in project?
    /* <Repo className='card' title='' image='' tech='' description='' shit='' /> */


    return (
        <div className='flex-column content-center w-3/5'>
            <br></br>
            <div className='text-light text-center'>
                <h2>Projects</h2>
            </div>
            <br></br>
            <div className=''>
                <Repo title='Birdr' tech='MERN stack, Cloudinary API, Apollo Server/Client' description='Social Media PWA for birdwatchers, deployed with Heroku' shit='https://safe-everglades-20797.herokuapp.com/' /><br></br>
                <Repo title='Budget Tracker' tech='Mongoose, Express.js, IndexDB, MongoDB, javascript' description='PWA built with MongoDB for offline budget tracking, deployed with Heroku' shit='https://budget-tracker-24.herokuapp.com/' /><br></br>
                <Repo title='Wine-N-Dine' tech='HTML, CSS, Javascript, fetching from Third Party API' description='Recipe Website, I designed and implemented the individual recipe pages.' shit='https://jwviking.github.io/project1/' /> <br></br>
                <Repo title='Password Generator' tech='HTML, CSS, Javascript' description='Random Password Generator' shit='https://rbodil.github.io/Password-Generator/' /> <br></br>
                <Repo title='Runbuddy' tech='HTML, CSS' description='Personal Trainer mock website' shit='https://rbodil.github.io/run-buddy/' />
            </div>
        </div>
    )
}

export default Projects;