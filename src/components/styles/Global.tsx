import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
        * {
        /* box-sizing: border-box; */
        /* padding: 0; */
        /* margin: 0; */
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: deepskyblue;
        /* display: none; */
    }

`

export default GlobalStyles