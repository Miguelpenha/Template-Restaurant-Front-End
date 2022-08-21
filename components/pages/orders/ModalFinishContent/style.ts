import styled from 'styled-components'

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
    background-color: green;
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