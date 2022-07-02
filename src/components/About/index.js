import React from 'react';
import photo from '../../assets/family-photo4.jpg'

function About(props) {


    return (
        <section className='text-light flex-column w-full justify-center p-4 text-center'>
            <div className='w-fit px-1 text-center mx-auto'>
            <h1 classname="justify-self-end py-2">About Me</h1>
            <img src={photo}></img>
            </div>
            
            <br></br>
            <article className='w-2/3 mx-auto justify-content-center'>
            <p className='indent-8'>
                I am a full stack developer currently looking for a job. I have excellent interpersonal skills and I enjoy coding, camping, traveling and spending time with my family. I have been doing freelance work for the past 6 months, and recieved my Professional Coding Certificate through the University of Utah. Take a look at my growing tech stack below to see if I would make a good fit for your dev team or if you would like me to build you something!
            </p>
            <br></br>
            <p className='indent-8'>
                HTML, CSS frameworks including Bootstrap and Tailwind, Javascript, jQuery, Web APIs, Third Party API's, Server Side API's, Node.js, Express.js, MySQL, Object Oriented Programing, Test Driven Development, Object Relational Mapping, Model View Controller, Handlebars.js, PWA, MERN stack, State, GraphQL, Docker
            </p>
        </article>
        </section>
        
    )
}

export default About;