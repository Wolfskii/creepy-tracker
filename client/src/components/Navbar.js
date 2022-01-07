import logo from '../img/logo.svg'

export default function Navbar () {
  return (
    <nav style={navbarStyle}>
      <div className='container'>
        <ul>
          <li>
            <a href=''>
              <img alt='logo' src={logo} style={logoImgStyle} />
            </a>
          </li>
          <li><a href='#features'>Features</a></li>
          <li><a href='#form'>Form</a></li>
          <li><a href='#team'>Team</a></li>
        </ul>
      </div>
    </nav>
  )
}

const navbarStyle = {
  position: 'sticky',
  top: '0',
  color: '#D11342',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

const logoImgStyle = {
  maxHeight: '3.5em'
}
