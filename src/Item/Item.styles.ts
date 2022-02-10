import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  text-align: center;
  
  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    height: 100%;
    h3 {
      font-size: 1.2rem;
      margin: 0;
      margin-bottom: 0.5rem;
    }
  }
`;