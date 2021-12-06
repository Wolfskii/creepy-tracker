import background from '../img/hero-img.jpg'

function Hero () {
  return (
    <div className='hero-image' style={heroImageStyle}>
      <div className='hero-text' style={heroTextStyle}>
        <h2 className='hero-heading'>Upptäck hemsökta platser nära dig...</h2>
      </div>
    </div>
  )
}

const heroImageStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({ background })',
  height: '50%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
}

const heroTextStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white'
}

export default Hero
