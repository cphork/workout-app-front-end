import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div>


            </div>

            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/arms'><a>Arms List</a></Link >
            <Link href='/legs'><a>Legs List</a></Link >
            <Link href='/glutes'><a>Glutes List</a></Link >
            <Link href='/stopwatch'><a>Stop Watch</a></Link >
            <Link href='/timer'><a>Timer</a></Link >
        </nav >
    );
}

export default Navbar;
