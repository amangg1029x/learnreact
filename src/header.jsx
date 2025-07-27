function Header() {

    return (
        <header className="head">
            <nav className="flex px-15 py-3 justify-end justify-between bg-pink-600 fixed w-full top-0">
                <ul className="flex gap-10 items-center text-xl">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header