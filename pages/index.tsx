import Head from 'next/head'
import { Container, Title, ButtonOrders } from '../styles/pages'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Template de Restaurante</title>
            </Head>
            <Container>
                <Title>Template de Restaurante</Title>
                <Link href="/orders" passHref>
                    <ButtonOrders title="Pedidos">
                        Pedidos
                    </ButtonOrders>
                </Link>
            </Container>
        </>
    )
}