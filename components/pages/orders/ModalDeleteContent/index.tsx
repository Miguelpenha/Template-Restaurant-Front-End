import { Dispatch, SetStateAction, FC } from 'react'
import { IOrder } from '../../../../types'
import { MessageConfirmDelete, ContainerButtonsDelete, ButtonCancelDelete, ButtonConfirmDelete } from './style'
import base from '../../../../api/base'

interface Iprops {
    ordersMutate: Function
    openDeleteModal: IOrder | null | undefined
    setOpenDeleteModal: Dispatch<SetStateAction<IOrder | null | undefined>>
}

const ModalDeleteContent: FC<Iprops> = ({ ordersMutate, openDeleteModal, setOpenDeleteModal }) => {
    return <>
        <MessageConfirmDelete>Tem certeza que deseja deletar esse pedido?</MessageConfirmDelete>
        <ContainerButtonsDelete>
            <ButtonCancelDelete onClick={() => setOpenDeleteModal(null)}>Cancelar</ButtonCancelDelete>
            <ButtonConfirmDelete onClick={async () => {
                await base.delete(`/orders/${openDeleteModal?._id}`)
                
                await ordersMutate()
                
                setOpenDeleteModal(null)
            }}>Deletar pedido</ButtonConfirmDelete>
        </ContainerButtonsDelete>
    </>
}

export default ModalDeleteContent