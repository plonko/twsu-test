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

  // input[type="text"] {
  //   font-size: 4rem;
  //   border: none;
  //   border-bottom: 4px solid #FF851B;
  //   display: block;
  //   margin: auto;
  //   text-align: center;
  // }

  // input[type="text"]:focus {
  //   outline: none;
  //   background-color: #FFDC00;
  // }
`