import Navbar from './Navbar'
import Hero from './Hero'
import background from '../img/hero-img.jpg'

export default function Header () {
  return (
    <header style={headerStyle}>
      <Navbar />
      <Hero />
    </header>
  )
}

const headerStyle = {
  minHeight: '70vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
