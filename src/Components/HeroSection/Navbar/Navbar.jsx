import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#hero">DZ</a>
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
