import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`
export const Input = styled.input`
  font-size: 4rem;
  border: none;
  border-bottom: 4px solid #FF851B;
  display: block;
  margin: auto;
  text-align: center;

  &:focus {
    outline: none;
    background-color: #FFDC00;
  }
`