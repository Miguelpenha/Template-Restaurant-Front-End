import api from '../../api'
import base from '../../api/base'
import { IOrder } from '../../types'
import { Container, HeaderNav, ButtonBack, IconButtonBack, Title, ButtonOrdersFinished, OrdersContainer, Order, Header, Neighborhood, Icons, ContainerIconDelete, IconDelete, ContainerIconCheck, IconCheck, Balance, Note, Footer, Created, Withdrawal, ModalOrder, ModalFinish, MessageConfirmFinish, ContainerButtonsFinish, ButtonCancelFinish, ButtonConfirmFinish, ModalDelete, MessageConfirmDelete, ContainerButtonsDelete, ButtonCancelDelete, ButtonConfirmDelete } from '../../styles/pages/orders'
import Loading from '../../components/Loading'
import { useState } from 'react'
import Link from 'next/link'

export default function Orders() {
    const { data: orders, mutate: ordersMutate } = api.get<IOrder[]>('/orders?location=true')
    const [openOrderModal, setOpenOrderModal] = useState<IOrder | null>()
    const [openDeleteModal, setOpenDeleteModal] = useState<IOrder | null>()
    const [openFinishModal, setOpenFinishModal] = useState<IOrder | null>()

    return (
        <Container>
            <HeaderNav>
                <Link href="/" passHref>
                    <ButtonBack title="Voltar">
                        <IconButtonBack xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
                            <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>
                        </IconButtonBack>
                    </ButtonBack>
                </Link>
                <Title>Pedidos</Title>
                <Link href="orders/finished" passHref>
                    <ButtonOrdersFinished title="Pedidos finalizados">Pedidos finalizados</ButtonOrdersFinished>
                </Link>
            </HeaderNav>
            <OrdersContainer>
                {orders ? orders.map(order => !order.finished && (
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
                                <ContainerIconCheck onClick={ev => {
                                    ev.stopPropagation()
                                    ev.cancelable = true

                                    setOpenFinishModal(order)
                                }}>
                                    <IconCheck xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                                    </IconCheck>
                                </ContainerIconCheck>
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
                <ModalFinish
                    style={{
                        overlay: {
                            display: 'flex',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    }}
                    isOpen={openFinishModal ? true : false}
                    onRequestClose={() => setOpenFinishModal(null)}
                >
                    <MessageConfirmFinish>Tem certeza que deseja finalizar esse pedido?</MessageConfirmFinish>
                    <ContainerButtonsFinish>
                        <ButtonCancelFinish onClick={() => setOpenFinishModal(null)}>Cancelar</ButtonCancelFinish>
                        <ButtonConfirmFinish onClick={async () => {
                            await base.patch(`/orders/${openFinishModal?._id}`, {
                                ...openFinishModal,
                                finished: true
                            })
                            
                            await ordersMutate()

                            setOpenFinishModal(null)
                        }}>Finalizar pedido</ButtonConfirmFinish>
                    </ContainerButtonsFinish>
                </ModalFinish>
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
                        }}>Deletar pedido</ButtonConfirmDelete>
                    </ContainerButtonsDelete>
                </ModalDelete>
            </OrdersContainer>
        </Container>
    )
}