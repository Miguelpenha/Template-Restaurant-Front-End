import api from '../../api'
import { IOrder } from '../../types'
import { Container, HeaderNav, ButtonBack, IconButtonBack, Title, ButtonOrdersFinished, OrdersContainer, ModalOrder, ModalFinish, ModalDelete } from '../../styles/pages/orders'
import Loading from '../../components/Loading'
import { useState } from 'react'
import Link from 'next/link'
import Order from '../../components/pages/orders/Order'
import ModalFinishContent from '../../components/pages/orders/ModalFinishContent'
import ModalDeleteContent from '../../components/pages/orders/ModalDeleteContent'

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
                    <Order
                        order={order}
                        key={order._id}
                        setOpenOrderModal={setOpenOrderModal}
                        setOpenDeleteModal={setOpenDeleteModal}
                        setOpenFinishModal={setOpenFinishModal}
                    />
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
                    <ModalFinishContent
                        ordersMutate={ordersMutate}
                        openFinishModal={openFinishModal}
                        setOpenFinishModal={setOpenFinishModal}
                    />
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
                    <ModalDeleteContent
                        ordersMutate={ordersMutate}
                        openDeleteModal={openDeleteModal}
                        setOpenDeleteModal={setOpenDeleteModal}
                    />
                </ModalDelete>
            </OrdersContainer>
        </Container>
    )
}