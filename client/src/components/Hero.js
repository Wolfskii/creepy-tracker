export default function Hero () {
  return (
    <div className='container' style={heroStyle}>
      <h1>Creepy-kartan<span>.se</span></h1>
      <p className='sub-heading'>Upptäck hemsökta och övergivna platser nära dig</p>
    </div>
  )
}

const heroStyle = {
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}
