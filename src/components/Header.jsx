import React from 'react'

function Header() {
  return (
   <header>
    <div>
      <span className='logo'>
      Geek shop
      </span>
      <ul className='nav'>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Кабинет</li>
      </ul>
    </div>
    <div className='main-img'></div>
   </header>
  )
}

export default Header;