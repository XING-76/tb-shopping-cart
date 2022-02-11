import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
  margin-top: 5rem;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  color: white;
`;

export const ScrollTopButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  bottom: 20px;
  color: black;
  border: 1px solid black;
`;