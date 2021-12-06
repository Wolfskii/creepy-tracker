import logo from '../img/logo.svg'

function Header () {
  return (
    <header>
      <nav className='navigation'>
        <ul className='navigation-list-1'>
          <li className='navigation-list-item'><a href='#home'>Home</a></li>
          <li className='navigation-list-item'><a href='#features'>Features</a></li>
          <li className='navigation-list-item'><a href=''><img className='logo' alt='logo' src={logo} /></a></li>
          <li className='navigation-list-item'><a href='#form'>Form</a></li>
          <li className='navigation-list-item'><a href='#team'>Team</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
