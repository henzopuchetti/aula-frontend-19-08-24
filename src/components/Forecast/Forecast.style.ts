import styled from "styled-components";

export const StyledForecast = styled.article`
    border: 1px solid blueviolet;
    padding: 16px;
    border-radius: 6px;
    color: black;
    display: flex;
    justify-content: space-around;
    width: 40%;

    &:hover{
        background-color: blueviolet;
        color: white;
    }

    ${
        props => props.large && `
        width: 100%;
        font-size: 32px;
        `
    }

    ${(props)=>
    props.min < 15 &&
    `
        color: lightblue
    `
    }
`