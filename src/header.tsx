export function Header() {
return (
<nav>
    <h2 id="black-title">chirpus inc.</h2>

    <div className="nav-links">
        <ul id="navbar">
            <li><a className="gray-title" href="#Work">Work</a></li>
            <li><a className="gray-title" href="#About">About Us</a></li>
            <li><a className="gray-title" href="#Contact">Contact</a></li>
        </ul>

        <button id="nav-button">Hire Us</button>
    </div>
</nav>
)
}