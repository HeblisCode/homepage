import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mukta', sans-serif;
    }
    body{
        background: transparent linear-gradient(240deg, #DA50FB 0%, #24B0D4 100%) 0% 0% no-repeat padding-box;;
        overflow: hidden;
    }
`;

export default GlobalStyle;
