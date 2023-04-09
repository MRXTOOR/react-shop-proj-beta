import React,{UseState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  let [cartOpen,SetCartOpen] = UseState(false)
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
      <ShoppingCartIcon className='ShoppingCartIcon'/>
    </div>
    <div onClick={() => SetCartOpen(cartOpen = !cartOpen)} className='main-img'></div>
   </header>
  )
}

export default Header;