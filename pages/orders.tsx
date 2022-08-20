import api from '../api'
import base from '../api/base'
import { IOrder } from '../types'
import { Container, OrdersContainer, Order, Header, Neighborhood, ContainerIconDelete, IconDelete, Balance, Note, Footer, Created, Withdrawal, ModalDelete, MessageConfirmDelete, ContainerButtons, ButtonCancelDelete, ButtonConfirmDelete } from '../styles/pages/orders'
import Loading from '../components/Loading'
import { useState } from 'react'

export default function Orders() {
    const { data: orders, mutate: ordersMutate } = api.get<IOrder[]>('/orders?location=true')
    const [openOrderModal, setOpenOrderModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<IOrder | null>()

    return (
        <Container>
            <OrdersContainer>
                {orders ? orders.map(order => 
                    <Order key={order._id} title="Ver pedido" onClick={() => setOpenOrderModal(true)}>
                        <Header>
                            <Neighborhood>{order.location.neighborhood}</Neighborhood>
                            <ContainerIconDelete onClick={() => setOpenDeleteModal(order)}>
                                <IconDelete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                                </IconDelete>
                            </ContainerIconDelete>
                        </Header>
                        <Balance>{order.balanceConverted}</Balance>
                        <Note>{order.note}</Note>
                        <Footer>
                            <Created>Pedido feito as {order.created.hour}</Created>
                            {order.withdrawal && <Withdrawal>Pedido para retirada</Withdrawal>}
                        </Footer>
                    </Order>
                ) : <Loading/>}
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
                    <ContainerButtons>
                        <ButtonCancelDelete onClick={() => setOpenDeleteModal(null)}>Cancelar</ButtonCancelDelete>
                        <ButtonConfirmDelete onClick={async () => {
                            await base.delete(`/orders/${openDeleteModal?._id}`)
                            
                            await ordersMutate()

                            setOpenDeleteModal(null)
                        }}>Deletar pedido</ButtonConfirmDelete>
                    </ContainerButtons>
                </ModalDelete>
            </OrdersContainer>
        </Container>
    )
}