import './footer.css'

const FooterSection = () => {
  return (
    <footer>
      <section className="social-links">
        <ul>
          <li>
            <a href="">F</a>
          </li>
          <li>
            <a href="">in</a>
          </li>
          <li>
            <a href="">p</a>
          </li>
        </ul>
      </section>
      <section className="nav-links">
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#articles">articles</a>
          </li>
          <li>
            <button className="customButton">
              <a href="#subscribe">subscribe</a>
            </button>
          </li>
        </ul>
      </section>
    </footer>
  )
}
export default FooterSection
