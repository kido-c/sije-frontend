import { createGlobalStyle } from "styled-components";
import PretendardMedium from "../assets/fonts/Pretendard-Medium.woff";
import PretendardBold from "../assets/fonts/Pretendard-Bold.woff";
import SwitzerBold from "../assets/fonts/Switzer-Bold.woff";
import SwitzerMedium from "../assets/fonts/Switzer-Medium.woff";

const GlobalFonts = createGlobalStyle`
     @font-face {
        font-family: "Pretendard";
        src: url(${PretendardMedium}) format('woff'); 
        unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF;
        font-weight: normal;
    }

     @font-face {
        font-family: "Pretendard";
        src: url(${PretendardBold}) format('woff'); 
        unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF;
        font-weight: bold;
    }

     @font-face {
        font-family: "Switzer";
        src: url(${SwitzerMedium}) format('woff'); 
        font-weight: normal;
        unicode-range: U+0041-005A, U+0061-007A; 
    }

         @font-face {
        font-family: "Switzer";
        src: url(${SwitzerBold}) format('woff'); 
        font-weight: bold;
        unicode-range: U+0041-005A, U+0061-007A; 
    }

`;

export default GlobalFonts;
