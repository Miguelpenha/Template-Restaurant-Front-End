import { useState } from 'react'
import Head from 'next/head'
import api from '../api/base'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Container, Title, Form, Field, Label, Input, ButtonSubmit } from '../styles/pages/login'

export default function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    return <>
        <Head>
            <title>Login</title>
        </Head>
        <Container>
            <Title>Login</Title>
            <Form onSubmit={async ev => {
                ev.preventDefault()

                if (login && password) {
                    const { authenticated } = (await api.post<{ authenticated: boolean }>('/auth/login', {
                        login,
                        password
                    })).data

                    if (authenticated) {
                        toast('Login feito com sucesso!', {
                            type: 'success'
                        })
    
                        router.replace('/')
                    } else {
                        toast('Login ou senha erradas', {
                            type: 'error'
                        })
                    }
                } else {
                    toast('Campos em falta', {
                        type: 'error'
                    })
                }
            }}>
                <Field>
                    <Label htmlFor="Login">Login</Label>
                    <Input type="text" onChange={ev => setLogin(ev.target.value)} defaultValue={login} id="login" name="login" placeholder="Seu login..."/>
                </Field>
                <Field>
                    <Label htmlFor="Senha">Senha</Label>
                    <Input type="password" onChange={ev => setPassword(ev.target.value)} defaultValue={password} id="password" name="password" placeholder="Sua senha..."/>
                </Field>
                <ButtonSubmit type="submit" title="Fazer login">Fazer login</ButtonSubmit>
            </Form>
        </Container>
    </>
}