import styled from 'styled-components';
import { colours } from './variables';
import sushiSvg from '../images/sushi.svg'
import happySvg from '../images/happy.svg'
import sadSvg from '../images/sad.svg'

export const Wrapper = styled.div`
  margin: 4em;
  padding: 0 4rem;
  position: relative;
`;

export const Ruler = styled.div`
  height: 4rem;
  width: 100%;
  background-color: rgb(115,199,192);
  background-image: linear-gradient(to right, rgba(0,0,0,0.25) 6px, transparent 6px), linear-gradient(to right, transparent 12px, rgba(0,0,0,0.25) 12px, rgba(0,0,0,0.25) 14px, transparent 14px, transparent 20px, rgba(0,0,0,0.25) 20px, rgba(0,0,0,0.25) 22px, transparent 22px, transparent 28px, rgba(0,0,0,0.25) 28px, rgba(0,0,0,0.25) 30px, transparent 30px, transparent 36px, rgba(0,0,0,0.25) 36px, rgba(0,0,0,0.25) 38px, transparent 38px);
  background-repeat: repeat-x;
  background-size: 44px 30px, 44px 20px;
  background-position: 8px bottom;
  border-bottom: 2px solid rgba(0,0,0,0.25);
`;

const Face = styled.div`
  width: 8rem;
  height: 8rem;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 101;
`;

export const HappyEnd = styled(Face)`
  background-image: url(${happySvg});
  right: -2rem;
  top: -2rem;
  transition: all 200ms;
  transform: scale(${props => props.scaleValue > 50 ? 1.4 : 1});
  filter: drop-shadow(5px 5px 7px rgba(0,0,0,0.5));
`;

export const SadEnd = styled(Face)`
  background-image: url(${sadSvg});
  left: -2rem;
  top: -2rem;
  transition: all 200ms;
  transform: scale(${props => props.scaleValue < 50 ? 1.4 : 1});
  filter: drop-shadow(5px 5px 7px rgba(0,0,0,0.5));
`;

export const Marker = styled(Face)`
  background-image: url(${sushiSvg});
  width: 7rem;
  height: 7rem;
  top: -7.1rem;
  left: -3.5rem;
  z-index: 100;
`;

export const MarkerWrapper = styled.div`
  height: 4rem;
  width: 100%;
  position: relative;
  transition: all 500ms;
  transform: translateX(${props => props.scaleValue}%);
`;
