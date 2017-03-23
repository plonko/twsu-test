import styled from 'styled-components';
import { colours } from './variables';

export const Wrapper = styled.div`
  overflow: hidden;
`

export const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: ${colours.red};
`

export const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${colours.blue};
`

export const Input = styled.input`
  font-size: 2.5rem;
  border: none;
  border-bottom: 4px solid #FF851B;
  display: block;
  text-align: center;
  height: 4rem;
  width: 100%;
  font-family: 'Chewy', cursive;

  &:focus {
    outline: none;
    background-color: #FFDC00;
  }
`