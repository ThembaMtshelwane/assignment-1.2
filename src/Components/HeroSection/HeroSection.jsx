import Navbar from './Navbar/Navbar'
import './hero.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <h1>DRONOTICZ</h1>
      <h3>The Era of Drones</h3>
      <span className="bar hero-bar"></span>
    </section>
  )
}
export default HeroSection
