import React from 'react';


function Nav({setWhale}){
    

    return(
        <div className='bg-primary flex-row items-center space-between mx-auto px-2 py-2 text-secondary md'>
            <h3 className='pl-2 sm:pl-1'>
                <a data-testid="link" onClick={()=> setWhale('/')}>Reagan Bodily</a>
            </h3>
            <nav>
                <ul className='flex-row pr-2 sm:pr-1 '>
                    <li className='mx-4 text-xl sm:text-lg'>
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