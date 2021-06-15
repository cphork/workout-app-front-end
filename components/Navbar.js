import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-light light-blue lighten-4">

                <a className="navbar-brand" href="/">Workout App</a>

                <Link href='/'>
                    <FontAwesomeIcon icon={faHome} className='home-btn' />
                </Link>

                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                        className="fas fa-bars fa-1x"></i></span><FontAwesomeIcon icon={faBars} className='ham-bar' /></button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent1">


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/arms">Arms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/legs">Legs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/glutes">Glutes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About Me</a>
                        </li>
                    </ul>


                </div>


            </nav>


        </>



    );
}

export default Navbar;
