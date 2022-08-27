import api from '../../api'
import base from '../../api/base'
import { IOrder } from '../../types'
import { Container, HeaderNav, ButtonBack, IconButtonBack, Title, OrdersContainer, Order, Header, Neighborhood, Icons, ContainerIconDelete, IconDelete, Balance, Note, Footer, Created, Withdrawal, ModalOrder, ModalDelete, MessageConfirmDelete, ContainerButtonsDelete, ButtonCancelDelete, ButtonConfirmDelete } from '../../styles/pages/orders/finished'
import Loading from '../../components/Loading'
import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

export default function Orders() {
    const { data: orders, mutate: ordersMutate } = api.get<IOrder[]>('/orders?location=true')
    const [openOrderModal, setOpenOrderModal] = useState<IOrder | null>()
    const [openDeleteModal, setOpenDeleteModal] = useState<IOrder | null>()

    return (
        <Container>
            <HeaderNav>
                <Link href="/orders" passHref>
                    <ButtonBack title="Voltar">
                        <IconButtonBack xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
                            <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>
                        </IconButtonBack>
                    </ButtonBack>
                </Link>
                <Title>Pedidos Finalizados</Title>
            </HeaderNav>
            <OrdersContainer>
                {orders ? orders.map(order => order.finished && (
                    <Order key={order._id} title="Ver pedido" onClick={ev => {
                        ev.stopPropagation()
                        ev.cancelable = true

                        setOpenOrderModal(order)
                    }}>
                        <Header>
                            <Neighborhood>{order.location.neighborhood}</Neighborhood>
                            <Icons>
                                <ContainerIconDelete onClick={ev => {
                                    ev.stopPropagation()
                                    ev.cancelable = true

                                    setOpenDeleteModal(order)
                                }}>
                                    <IconDelete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                                    </IconDelete>
                                </ContainerIconDelete>
                            </Icons>
                        </Header>
                        <Balance>{order.balanceConverted}</Balance>
                        <Note>{order.note}</Note>
                        <Footer>
                            <Created>Pedido feito as {order.created.hour}</Created>
                            {order.withdrawal && <Withdrawal>Pedido para retirada</Withdrawal>}
                        </Footer>
                    </Order>
                )) : <Loading/>}
                <ModalOrder
                    style={{
                        overlay: {
                            display: 'flex',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    }}
                    isOpen={openOrderModal ? true : false}
                    onRequestClose={() => setOpenOrderModal(null)}
                >
                </ModalOrder>
                <ModalDelete
                    style={{
                        overlay: {
                            display: 'flex',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    }}
                    isOpen={openDeleteModal ? true : false}
                    onRequestClose={() => setOpenDeleteModal(null)}
                >
                    <MessageConfirmDelete>Tem certeza que deseja deletar esse pedido?</MessageConfirmDelete>
                    <ContainerButtonsDelete>
                        <ButtonCancelDelete onClick={() => setOpenDeleteModal(null)}>Cancelar</ButtonCancelDelete>
                        <ButtonConfirmDelete onClick={async () => {
                            await base.delete(`/orders/${openDeleteModal?._id}`)
                            
                            await ordersMutate()

                            setOpenDeleteModal(null)

                            toast('Pedido deletado com sucesso!', {
                                type: 'success'
                            })
                        }}>Deletar pedido</ButtonConfirmDelete>
                    </ContainerButtonsDelete>
                </ModalDelete>
            </OrdersContainer>
        </Container>
    )
}