import React from "react";
import resume from './Resume-2022.pdf'

function Home() {
    return (
        <div className="mx-auto p-3 text-center">
            <div className="">
                <h1 >Welcome to my webpage!</h1>
            </div>
            <p>update the resume in your anchor tag you asshole</p>
            <div>
                <a className="text-secondary" target="_blank" rel='resume' href={resume}>
                    <h3>Take a look at my Resume</h3></a>
            </div>
        </div>
    )
}

export default Home;