import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const HeaderNav = styled.header`
    display: flex;
    position: relative;
    flex-direction: row;
`

export const ButtonBack = styled.a`
    left: 1%;
    top: 25%;
    width: 3.5%;
    height: 50%;
    padding: 0.5%;
    display: flex;
    border-radius: 25%;
    position: absolute;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    
    :hover {
        border-radius: 50%;
        background-color: ${props => props.theme.secondary};
    }
`

export const IconButtonBack = styled.svg`
    fill: ${props => props.theme.primary};
`

export const Title = styled.h1`
    margin: auto;
    margin-top: 4%;
    font-size: 2.5vw;
    color: ${props => props.theme.primary};
`