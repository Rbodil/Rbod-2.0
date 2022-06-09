import React from 'react';


function Nav({setWhale}){
    

    return(
        <div className='bg-primary flex-row items-center space-between mx-auto px-2 py-2 text-secondary '>
            <h2>
                <a data-testid="link" onClick={()=> setWhale('/')}>Reagan Bodily</a>
            </h2>
            <nav >
                <ul className='flex-row'>
                    <li className='mx-4'>
                        <a data-testid="about" onClick={()=> setWhale('/about')}>
                            About Me
                        </a>
                    </li>
                    <li className='mx-4'>
                        <a data-testid="message" onClick={()=> setWhale('/message')}>
                            Message
                        </a>
                    </li>
                    <li className='mx-4'>
                        <a data-testid="projects" onClick={()=> setWhale('/projects')}>
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};


export default Nav;