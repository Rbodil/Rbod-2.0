import React, { useEffect } from 'react';
import Repo from '../Repo'

function Projects() {
    // make repo card component, make tiles set classname to Card 
    /* <Repo className='card' title='' image='' tech='' description='' shit='' /> */

    return (
        <div>
            <div>
                <h2>Projects</h2>
            </div>
            <div className='pb-10'>
                
                <Repo className='card' title='Budget Tracker' image='hike' tech='Mongoose, Express.js, IndexDB, MongoDB, javascript' description='PWA built with MongoDB for offline budget tracking, deployed with Heroku' shit='https://budget-tracker-24.herokuapp.com/' />
                <Repo className='card' title='Wine-N-Dine' image='wine' tech='HTML, CSS, Javascript, fetching from Third Party API' description='Recipe Website, I designed and implemented the individual recipe pages.' shit='https://jwviking.github.io/project1/' />
                <Repo className='card' title='Password Generator' image='pg' tech='HTML, CSS, Javascript' description='Random Password Generator' shit='https://rbodil.github.io/Password-Generator/' />
                <Repo className='card' title='Runbuddy' image='trainer-1' tech='HTML, CSS' description='Personal Trainer mock website' shit='https://rbodil.github.io/run-buddy/' />
            </div>

        </div>

    )
}

export default Projects;