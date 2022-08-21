import styled from 'styled-components'

export const Container = styled.button`
    width: 80%;
    padding: 4%;
    margin: auto;
    border: none;
    display: flex;
    cursor: pointer;
    border-radius: 15px;
    text-decoration: none;
    flex-direction: column;
    transform: scale(0.95);
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColorSecondary};
    
    :hover {
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`

export const Header = styled.div`
    display: flex;
`

export const Neighborhood = styled.h3`
    align-self: center;
    font-weight: normal;
`

export const Icons = styled.div`
    width: 25%;
    display: flex;
    margin-left: auto;
`

export const ContainerIconDelete = styled.button`
    z-index: 2;
    width: 100%;
    padding: 2%;
    height: 120%;
    border: none;
    display: flex;
    border-radius: 25%;
    transition-duration: 0.1s;
    background-color: transparent;
    transition-timing-function: linear;
    fill: ${props => props.theme.primary};

    :hover {
        border-radius: 50%;
        background-color: ${props => props.theme.secondary};
    }
`

export const IconDelete = styled.svg`
    width: 80%;
    margin: auto;
`

export const ContainerIconCheck = styled.button`
    z-index: 2;
    padding: 2%;
    width: 100%;
    height: 120%;
    border: none;
    display: flex;
    border-radius: 25%;
    transition-duration: 0.1s;
    background-color: transparent;
    transition-timing-function: linear;
    fill: ${props => props.theme.primary};

    :hover {
        border-radius: 50%;
        background-color: ${props => props.theme.secondary};
    }
`

export const IconCheck= styled.svg`
    width: 80%;
    margin: auto;
`

export const Balance = styled.h3`
    margin-top: 2%;
`

export const Note = styled.span`
    display: flex;
    margin-top: 3.5%;
    color: ${props => props.theme.secondaryColor};
`

export const Footer = styled.div`
    display: flex;
    margin-top: 10%;
`

export const Created = styled.span`
    padding: 4% 0%;
    display: flex;
    font-size: 0.9vw;
    align-self: center;
`

export const Withdrawal = styled.span`
    padding: 3%;
    font-size: 0.8vw;
    margin-left: auto;
    font-weight: bold;
    border-radius: 20px;
    align-self: flex-start;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
    
    :hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.primary};
    }
`