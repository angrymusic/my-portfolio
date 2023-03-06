import { createGlobalStyle } from "styled-components";
import ChosunLo from "./ChosunLo.TTF";
import ChosunSg from "./ChosunSg.TTF";
import ChosunBg from "./ChosunBg.TTF";
import Pacifico from "./Pacifico-Regular.TTF";

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
  @font-face {
    font-family: 'Pacifico';
    src: url(${Pacifico}) format('truetype');
  }
`;
export default GlobalFont;
