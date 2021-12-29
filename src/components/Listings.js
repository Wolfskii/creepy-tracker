import Listing from './Listing'

export default function Listings () {
  return (
    <div className='listings-grid container' style={listingsGridStyle}>
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
    </div>
  )
}

const listingsGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  justifyContent: 'space-between',
  gridGap: '1.5em'
}
