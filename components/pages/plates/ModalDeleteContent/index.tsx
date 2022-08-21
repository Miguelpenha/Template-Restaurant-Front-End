import { Dispatch, SetStateAction, FC } from 'react'
import { IPlate } from '../../../../types'
import { MessageConfirmDelete, ContainerButtonsDelete, ButtonCancelDelete, ButtonConfirmDelete } from './style'
import base from '../../../../api/base'

interface Iprops {
    platesMutate: Function
    openDeleteModal: IPlate | null | undefined
    setOpenDeleteModal: Dispatch<SetStateAction<IPlate | null | undefined>>
}

const ModalDeleteContent: FC<Iprops> = ({ platesMutate, openDeleteModal, setOpenDeleteModal }) => {
    return <>
        <MessageConfirmDelete>Tem certeza que deseja deletar esse prato?</MessageConfirmDelete>
        <ContainerButtonsDelete>
            <ButtonCancelDelete onClick={() => setOpenDeleteModal(null)}>Cancelar</ButtonCancelDelete>
            <ButtonConfirmDelete onClick={async () => {
                await base.delete(`/plates/${openDeleteModal?._id}`)
                
                await platesMutate()
                
                setOpenDeleteModal(null)
            }}>Deletar prato</ButtonConfirmDelete>
        </ContainerButtonsDelete>
    </>
}

export default ModalDeleteContent