import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props){
    

    return(
        <header>
            <h2>
                <a data-testid="link" href="/">Reagan Bodily</a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about" href="#about" onClick={pageHandler}>
                            About Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
});

function pageHandler(){
    
}

export default Nav;