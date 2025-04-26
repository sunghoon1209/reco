import { createGlobalStyle } from "styled-components";

// reset 및 전역 스타일 설정
const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body{
    font-family: 'GmarketSansMedium';
}
*{
margin:0;
padding: 0;
box-sizing: border-box;
}
a{
    text-decoration: none;
    color: inherit;
}
ul,ol,li{
    list-style: none;
}


`;

export default GlobalStyle;