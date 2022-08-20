import Head from 'next/head'
import { Container, Title } from '../styles/pages'

export default function Home() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Template de Restaurante</title>
            </Head>
            <Container>
                <Title>Template de Restaurante</Title>
            </Container>
        </>
    )
}