import { createGlobalStyle } from "styled-components";
import ChosunLo from "./ChosunLo.TTF";
import ChosunSg from "./ChosunSg.TTF";

import ChosunGu from "./ChosunGu.TTF";
import ChosunBg from "./ChosunBg.TTF";
import Caveat from "./Caveat-Bold.TTF";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'ChosunLo';
    src: url(${ChosunLo}) format('truetype');
  }
  @font-face {
    font-family: 'ChosunGu';
    src: url(${ChosunGu}) format('truetype');
  }
  @font-face {
    font-family: 'ChosunBg';
    src: url(${ChosunBg}) format('truetype');
  }
  @font-face {
    font-family: 'Caveat';
    src: url(${Caveat}) format('truetype');
  }
`;
export default GlobalFont;
