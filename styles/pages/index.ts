import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 4%;
    font-size: 2.5vw;
    text-align: center;
`

export const ButtonOrders = styled.a`
    display: flex;
    padding: 2% 4%;
    margin-top: 5%;
    font-size: 1.5vw;
    font-weight: bold;
    align-self: center;
    align-items: center;
    border-radius: 20px;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.1s;
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