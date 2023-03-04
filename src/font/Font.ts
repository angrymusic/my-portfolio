import { createGlobalStyle } from "styled-components";
import ChosunLo from "./ChosunLo.TTF";
import ChosunSg from "./ChosunSg.TTF";
import ChosunBg from "./ChosunBg.TTF";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'ChosunLo';
    src: url(${ChosunLo}) format('truetype');
  }
  @font-face {
    font-family: 'ChosunSg';
    src: url(${ChosunSg}) format('truetype');
  }
  @font-face {
    font-family: 'ChosunBg';
    src: url(${ChosunBg}) format('truetype');
  }
`;
export default GlobalFont;
