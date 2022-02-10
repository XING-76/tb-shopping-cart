import CartItem from '../CartItem/CartItem';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Cart.styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

  const calculateTotal = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>購物車</h2>
      { cartItems.length === 0 ? <p>購物車無商品</p>: null }
      {
        cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      }
      <h2>總價: ${calculateTotal(cartItems)}</h2>
    </Wrapper>
  )
}

export default Cart;