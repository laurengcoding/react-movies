import { Link } from "react-router-dom"

export default function NavBar({ user }) {
    return (
        <nav>
            <p>Welcome, {user}!</p>
            <Link to="/" >Movies List Page</Link>
            &nbsp; | &nbsp;
            <Link to="/actors" >Actors List Page</Link>
        </nav>
    )
}