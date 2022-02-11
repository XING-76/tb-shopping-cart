import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
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
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton size="small" onClick={() => removeFromCart(item.id)}>
              <RemoveCircleOutlineOutlinedIcon fontSize="small" />
            </IconButton>
            <p className="cart_qty">{item.amount}</p>
            <IconButton size="small" onClick={() => addToCart(item)}>
              <AddCircleOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </div>
      </div>
      <span className="cartImg">
        <img src={item.imageUrl} alt={item.title} />
      </span>
    </Wrapper>
  )
}

export default CartItem;