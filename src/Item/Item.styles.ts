import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid #7d879c;
  border-radius: 20px;
  height: 100%;
  text-align: center;
  background-color: #373f50;
  
  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem 0.5rem;
    height: 100%;
    color: #fff;
    h3 {
      font-size: 1.2rem;
      margin: 0;
      margin-bottom: 0.5rem;
    }
    h3:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 1rem;
    }
  }
`;