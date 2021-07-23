import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --Dark: #141414;
    --DarkGray: #DADADA;
    --light: #ffffff;
    --primary: #293CFF;
    --primaryBlack: #5D61BB;
    --secondy: #6874F1;
    --secondyLight: #A9B8FC;
    --redLight: #ff6961;
    --accentLight: #F6C1A7;
    --accentBlack: #F9B5AC;
    --blackLight: #000000cc;
    --accentBlue: #81ccf7;
    --accentGray: #E8E8E8;
}

*{
    padding: 0;
    margin: 0;
    outline: 0;

    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

::-webkit-scrollbar{
    width: 8px;
    background-color: var(--redLight);
}
::-webkit-scrollbar-track{
    background-color: var(--redLight);
}
::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: var(--dark);
}

button{
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
    color: var(--blackLight);
    background-color: #CF0e0e;
    border: 1px solid var(--light);

    cursor: pointer;
}

`;