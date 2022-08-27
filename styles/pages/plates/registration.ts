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

export const Form = styled.form`
    width: 30%;
    padding: 2%;
    display: flex;
    margin-top: 2%;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 15px;
    flex-direction: column;
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
    
`

export const Input = styled.input`
    padding: 4%;
    border: none;
    font-size: 1vw;
    margin-top: 4%;
    border-radius: 5px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    
    :focus {
        outline: none;
    }
`

export const InputTextArea = styled.textarea`
    padding: 4%;
    border: none;
    font-size: 1vw;
    margin-top: 4%;
    resize: vertical;
    border-radius: 5px;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    
    :focus {
        outline: none;
    }
`

export const InputImage = styled.input`
    padding: 4%;
    border: none;
    font-size: 1vw;
    margin-top: 4%;
    border-radius: 5px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    
    :focus {
        outline: none;
    }
`

export const ButtonSubmit = styled.button`
    width: 80%;
    padding: 4%;
    border: none;
    display: flex;
    margin-top: 5%;
    cursor: pointer;
    font-size: 1.5vw;
    font-weight: bold;
    align-self: center;
    align-items: center;
    border-radius: 15px;
    text-decoration: none;
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