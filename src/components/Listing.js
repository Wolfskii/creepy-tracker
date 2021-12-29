import placeholderImg from '../img/placeholder-house.jpg'

export default function Listing () {
  return (
    <div className='listing'>
      <h3>Listing</h3>
      <p>Lorem ipsum dolor amedus dorime. Anae tistos mulangis.</p>
      <img src={placeholderImg} alt='placeholder-house' style={imgStyle} />
    </div>
  )
}

const imgStyle = {
  maxWidth: '280px'
}
