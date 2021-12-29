export default function Hero () {
  return (
    <div className='hero-text' style={heroTextStyle}>
      <h2 className='hero-heading'>Upptäck hemsökta platser nära dig...</h2>
    </div>
  )
}

const heroTextStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white'
}
