import styledNormalize from './normalize';
import { injectGlobal } from 'styled-components';
import { colours } from './variables';


export default () => injectGlobal`
  ${styledNormalize}

  html,
  body {
    font-family: 'Chewy', cursive;
    color: ${colours.black};
  }
`