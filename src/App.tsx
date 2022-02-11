import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
import Logo from './assets/logo.png';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// Styled
import { Wrapper, StyledButton, ScrollTopButton } from './App.styles';
// Types
export type CartItemType = {
  id: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>{
  const res = await (await fetch('https://vue3-course-api.hexschool.io/api/tb-ecommerce/products/all')).json();
  return res.products
} 

// Search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// App
const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [visible, setVisible] = useState(false);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'product',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]): number => items.length
  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. 確認商品是否已存在購物車
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? {...item, amount: item.amount + 1}
            : item
        )
      }
      // 第一次加入購物車
      return [...prev, {...clickedItem, amount: 1}]
    })
  }
  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack
          return [...ack, { ...item, amount: item.amount - 1} ]
        } else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    )
  }
  const removeCart = (): void => {
    setCartItems([] as CartItemType[])
  }
  const sendCart = (): void => {
    setCartItems([] as CartItemType[])
  }
  const goTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  window.addEventListener('scroll', () => {
    window.scrollY > 500 ? setVisible(true) : setVisible(false)
  })

  if (isLoading) return <LinearProgress/>
  if (error) return <div>錯誤顯示...</div>
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <img src={Logo} alt="logo" style={{width: '2rem'}}/>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="搜尋"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton aria-label="delete" size="large" onClick={() => setCartOpen(false)}>
                <ChevronRightIcon />
              </IconButton>
            </Stack>
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
            <Stack spacing={2} direction="row" style={{justifyContent: 'center', marginBottom: '2rem'}}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DeleteIcon />}
                onClick={() => removeCart()}
              >
                清空
              </Button>
              <Button
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                onClick={() => sendCart()}
              >
                送出
              </Button>
            </Stack>
          </Drawer>
          <StyledButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
              <ShoppingCartIcon/>
            </Badge>
          </StyledButton>
        </Toolbar>
      </AppBar>
      <Wrapper>
        <Grid container spacing={3}>
          {
            data?.map(item => {
              return (
                <Grid item key={item.id} xs={6} sm={4} md={3} lg={2}>
                  <Item item={item} handleAddToCart={handleAddToCart}/>
                </Grid>
              )
            })
          }
        </Grid>
        <ScrollTopButton
          style={{display: visible ? 'flex' : 'none'}}
          onClick={() => goTop()}
        >
          <KeyboardArrowUpIcon />
        </ScrollTopButton>
      </Wrapper>
    </>
  );
}

export default App;
