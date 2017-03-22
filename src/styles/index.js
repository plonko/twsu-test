import styledNormalize from './normalize';
import { injectGlobal } from 'styled-components'
 
export default () => injectGlobal`
  ${styledNormalize}
 
  html,
  body {
    height: 100vh;
  }

  // #root {
  //   padding-top: 2rem;
  //   border: 1rem solid #FFDC00;
  // }
`