import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        /* height: 100%; */
        width: 100%;
        overflow: hidden;
    }
    *, button, input{
        border: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root{
        --main-bg: #7e4eac;
        --light-purple: #af77d5;
        --purple: #532d84
    }
`