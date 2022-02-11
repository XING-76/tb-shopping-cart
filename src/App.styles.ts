import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
  margin-top: 5rem;
  padding: 0 1rem 1rem;
  background-color: #2a2f35;
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
  color: #fff;
  background-color: #7d879c;
  transition: .5s;
  border: 1px solid #7d879c;
`;