import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#hero">
            <span className="logo logo-d"> D</span>
            <span className="logo logo-z">Z</span>
          </a>
        </li>
        <li>
          <a href="#about">about</a>
          <a href="#articles">articles</a>
        </li>
        <li>
          <button className="customButton">
            <a href="#subscribe">subscribe</a>
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
