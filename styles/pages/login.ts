import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 6%;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.primary};
`

export const Form = styled.form`
    padding: 2%;
    display: flex;
    margin-top: 8%;
    padding-top: 2rem;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 15px;
    flex-direction: column;
    width: calc(300px + 8vw);
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Field = styled.div`
    width: 80%;
    display: flex;
    margin-bottom: 4%;
    align-self: center;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1.2rem;
`

export const Input = styled.input`
    padding: 4%;
    border: none;
    margin-top: 4%;
    font-size: 1rem;
    border-radius: 5px;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.backgroundColor};
    
    :focus {
        outline: none;
        border: 1px solid ${props => props.theme.primary};
    }
`

export const ButtonSubmit= styled.button`
    width: 70%;
    padding: 6%;
    border: none;
    display: flex;
    margin-top: 8%;
    cursor: pointer;
    margin-bottom: 2%;
    font-size: 1.5rem;
    font-weight: bold;
    align-self: center;
    align-items: center;
    border-radius: 20px;
    transform: scale(0.95);
    transition-duration: 0.1s;
    justify-content: space-evenly;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px 0px;
    background-color: ${props => props.theme.backgroundColor};

    :hover {
        opacity: 0.8;
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 15px 0px;
    }
`