import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    color: #333;
    border-radius: 25px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
    border: 2px solid pink;
    transition: all .5s ease-in ;
    &:hover{
        cursor: pointer;
        box-shadow:0 0 1rem .25rem pink;
    }

    h2{
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }
`

export const Reverse = styled(Card)`
    background-color: rgba(0,0,0,0.4);
    color: #fff;
`



export const NumDisplay = styled.div`
`    
export const TextDisplay = styled.div`

`
