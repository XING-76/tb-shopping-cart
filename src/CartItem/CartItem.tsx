import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>
            單價: ${item.price}<br/>
            品項總價: ${(item.amount * item.price)}
          </p>
        </div>
        <div className="buttons">
          <Button
            disableElevation
            variant="outlined"
            onClick={() => removeFromCart(item.id)}
          >
            <RemoveIcon />
          </Button>
          <p className="cart_qty">{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            <AddIcon />
          </Button>
        </div>
      </div>
      <span className="cartImg">
        <img src={item.imageUrl} alt={item.title} />
      </span>
    </Wrapper>
  )
}

export default CartItem;