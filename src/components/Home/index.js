import React from "react";
import resume from './Resume-2022.pdf'

function Home() {
    return (
        <div className="m-auto text-center flex-column">
            <div>
                <h1 className="text-md sm:text-7xl text-light">Welcome to My Portfolio!</h1>
            </div>
            {/* <p>update the resume in your anchor tag</p> */}
            <div className="w-100 flex-row justify-center">
                <a className="text-light" target="_blank" rel='noreferrer' href={resume}>
                    <h3 className="text-tertiary" >Take a look at my Resume</h3>
                </a>
            </div>
        </div>
    )
}

export default Home;