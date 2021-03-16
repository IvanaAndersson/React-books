import {Link} from "react-router-dom"
const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link className="nav-link" to="/">Item 1</Link></li>
        <li><Link className="nav-link" to="/">Item 2</Link></li>
        <li><Link className="nav-link" to="/">Item 2</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation
