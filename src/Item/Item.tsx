import Button from '@mui/material/Button';
// Types
import { CartItemType } from '../App';
// Style
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {
  return (
    <Wrapper>
      <img src={item.imageUrl} alt={item.title}/>
      <div>
        <h3>{item.title}</h3>
        {/* <p>{item.description}</p> */}
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => {handleAddToCart(item)}}>加入購物車</Button>
    </Wrapper>
  )
}

export default Item;