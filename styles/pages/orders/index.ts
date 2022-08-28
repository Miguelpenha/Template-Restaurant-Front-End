import styled, { keyframes, css } from 'styled-components'
import ModalNotStyled from 'react-modal'

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

export const ButtonOrdersFinished = styled.a`
    right: 2%;
    width: 20%;
    display: flex;
    padding: 1.5%;
    margin-top: 5%;
    font-size: 1.5vw;
    font-weight: bold;
    position: absolute;
    align-self: center;
    align-items: center;
    border-radius: 20px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.1s;
    justify-content: space-evenly;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px 0px;
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`

export const IconButtonOrdersFinished = styled.svg`
    width: 2vw;
    fill: ${props => props.theme.primary};
`

export const OrdersContainer = styled.div`
    display: grid;
    margin-top: 5%;
    grid-row-gap: 5vh;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 350px);
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