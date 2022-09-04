import Head from 'next/head'
import { Container, Title, Menu, ButtonOrders, IconButtonOrders } from '../styles/pages'
import Link from 'next/link'

export default function Home() {
    return <>
        <Head>
            <title>Template de Restaurante</title>
        </Head>
        <Container>
            <Title>Template de Restaurante</Title>
            <Menu>
                <Link href="/orders" passHref>
                    <ButtonOrders title="Pedidos">
                        Pedidos
                        <IconButtonOrders xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"/>
                        </IconButtonOrders>
                    </ButtonOrders>
                </Link>
                <Link href="/plates" passHref>
                    <ButtonOrders title="Pratos">
                        Pratos
                        <IconButtonOrders xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/>
                        </IconButtonOrders>
                    </ButtonOrders>
                </Link>
            </Menu>
        </Container>
    </>
}