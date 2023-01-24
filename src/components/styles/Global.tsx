import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
        * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        font-family: 'Poppins', sans-serif;
        /* background-color: #204229; */
        background-color: #202142;
        /* background-color: #202142; */
        color:#fff;
        line-height: 1.6;
    }

    ul{
        list-style: none;
    }

`

export default GlobalStyles