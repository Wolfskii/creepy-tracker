function Header () {
  return (
    <header>
      <nav>

        <input type='checkbox' id='check' />
        <label for='check' className='check-btn'><i class='fas fa-bars' /></label>
        <label class='logo'>Creepy tracker</label>

        <ul>
          <li><a class='active' href='#'>Kartan</a></li>
          {/*           <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Feedback</a></li> */}
        </ul>

      </nav>
    </header>
  )
}

export default Header
