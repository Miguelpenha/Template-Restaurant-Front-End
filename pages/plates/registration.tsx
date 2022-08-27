import { Container, HeaderNav, ButtonBack, IconButtonBack, Title, Form, Field, Label, Input, InputTextArea, ButtonSubmit } from '../../styles/pages/plates/registration'
import Link from 'next/link'
import { useState } from 'react'
import api from '../../api/base'
import { useRouter } from 'next/router'

function Registration() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('R$ 0,00')
    const [weight, setWeight] = useState(100)
    const [peoplesCount, setPeoplesCount] = useState(1)
    const [description, setDescription] = useState('')
    const router = useRouter()

    return (
        <Container>
            <HeaderNav>
                <Link href="/plates" passHref>
                    <ButtonBack title="Voltar">
                        <IconButtonBack xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
                            <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>
                        </IconButtonBack>
                    </ButtonBack>
                </Link>
                <Title>Cadastrar Prato</Title>
            </HeaderNav>
            <Form onSubmit={async ev => {
                ev.preventDefault()

                await api.post('/plates', {
                    name,
                    price,
                    weight,
                    peoplesCount,
                    description
                })

                router.back()
            }}>
                <Field>
                    <Label htmlFor="Nome">Nome</Label>
                    <Input type="text" onChange={ev => setName(ev.target.value)} defaultValue={name} id="name" name="name" placeholder="Nome do prato..."/>
                </Field>
                <Field>
                    <Label htmlFor="Preço">Preço</Label>
                    <Input type="text" onChange={ev => setPrice(ev.target.value)} defaultValue={price} id="price" name="price" placeholder="Preço do prato..."/>
                </Field>
                <Field>
                    <Label htmlFor="Peso">Peso</Label>
                    <Input type="number" onChange={ev => setWeight(Number(ev.target.value))} defaultValue={weight} step="10" id="weight" name="weight" placeholder="Peso do prato..."/>
                </Field>
                <Field>
                    <Label htmlFor="Serve quantas pessoas">Serve quantas pessoas</Label>
                    <Input type="number" onChange={ev => setPeoplesCount(Number(ev.target.value))} defaultValue={peoplesCount} id="peoplesCount" name="peoplesCount" placeholder="Serve quantas pessoas..."/>
                </Field>
                <Field>
                    <Label htmlFor="Descrição">Descrição</Label>
                    <InputTextArea rows={3} onChange={ev => setDescription(ev.target.value)} defaultValue={description} id="description" name="description" placeholder="Descrição do prato..."/>
                </Field>
                <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
            </Form>
        </Container>
    )
}

export default Registration