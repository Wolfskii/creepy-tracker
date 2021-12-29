export default function Hero () {
  return (
    <div style={heroTextStyle}>
      <h1>Creepy-kartan<span className='red'>.</span>se</h1>
      <h2>Upptäck hemsökta och övergivna platser nära dig</h2>
    </div>
  )
}

const heroTextStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}
