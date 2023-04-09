import React, {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  let [cartOpen,SetCartOpen] = useState(false)
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

      <ShoppingCartIcon onClick={() => SetCartOpen(cartOpen = !cartOpen)}  className={`ShoppingCartIcon ${cartOpen && `active`}`} />
   {cartOpen && (
    <div className='ShoppingCart'>
      
    </div>
   )}
   
   </div>
    <div className='main-img'></div>
   </header>
  )


  //className={`shop-cart ${cartOpen ? 'clicked' : ''}`
}

export default Header;