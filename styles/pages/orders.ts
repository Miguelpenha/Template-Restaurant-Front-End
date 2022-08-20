import styled, { keyframes, css } from 'styled-components'
import ModalNotStyled from 'react-modal'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 4%;
    font-size: 2.5vw;
    align-self: center;
    color: ${props => props.theme.primary};
`

export const OrdersContainer = styled.div`
    display: grid;
    margin-top: 5%;
    grid-template-columns: repeat(4, 1fr);
`

export const Order = styled.a`
    width: 80%;
    padding: 4%;
    margin: auto;
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

export const ContainerIconDelete = styled.a`
    z-index: 2;
    padding: 2%;
    height: 120%;
    width: 100%;
    display: flex;
    border-radius: 25%;
    transition-duration: 0.1s;
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

export const ContainerIconCheck = styled.a`
    z-index: 2;
    padding: 2%;
    height: 120%;
    width: 100%;
    display: flex;
    border-radius: 25%;
    transition-duration: 0.1s;
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

const show = keyframes`
    0% {
        opacity: 20%;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    100% {
        opacity: 100%;
    }
`

export const ModalOrder = styled(ModalNotStyled)`
    width: 40%;
    height: 40%;
    margin: auto;
    outline: none;
    display: flex;
    padding: 1.5%;
    border-radius: 15px;
    flex-direction: column;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColor};
    
    ${props => props.isOpen && css`
        animation: ${show} 0.5s;
    `}
`

export const ModalFinish = styled(ModalNotStyled)`
    width: 40%;
    height: 40%;
    margin: auto;
    outline: none;
    display: flex;
    padding: 1.5%;
    border-radius: 15px;
    flex-direction: column;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColor};
    
    ${props => props.isOpen && css`
        animation: ${show} 0.5s;
    `}
`

export const MessageConfirmFinish = styled.h2`
    margin-top: 5%;
    align-self: center;
`

export const ContainerButtonsFinish = styled.div`
    width: 60%;
    display: flex;
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonCancelFinish = styled.button`
    border: none;
    padding: 3% 12%;
    font-size: 1vw;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    transform: scale(0.95);
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`

export const ButtonConfirmFinish = styled.button`
    border: none;
    padding: 3% 8%;
    font-size: 1vw;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    transform: scale(0.95);
    transition-duration: 0.1s;
    transition-timing-function: linear;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px 0px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`

export const ModalDelete = styled(ModalNotStyled)`
    width: 40%;
    height: 40%;
    margin: auto;
    outline: none;
    display: flex;
    padding: 1.5%;
    border-radius: 15px;
    flex-direction: column;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColor};
    
    ${props => props.isOpen && css`
        animation: ${show} 0.5s;
    `}
`

export const MessageConfirmDelete = styled.h2`
    margin-top: 5%;
    align-self: center;
`

export const ContainerButtonsDelete = styled.div`
    width: 60%;
    display: flex;
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
`

export const ButtonCancelDelete = styled.button`
    border: none;
    padding: 3% 12%;
    font-size: 1vw;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    transform: scale(0.95);
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`

export const ButtonConfirmDelete = styled.button`
    border: none;
    padding: 3% 8%;
    font-size: 1vw;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    background-color: red;
    transform: scale(0.95);
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px 0px;

    :hover {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`