import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justifu-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #373f50;
  padding-bottom: 20px;

  div {
    flex-grow: 3;
  }

  .information,
  .buttons {
    display: flex;
    justifu-content: space-between;
    .cart_qty {
      width: 2rem;
      text-align: center;
    }
  }

  .cartImg {
    width: 5rem;
    height: 5rem;
    img {
      width: 100%
    }
  }
`;