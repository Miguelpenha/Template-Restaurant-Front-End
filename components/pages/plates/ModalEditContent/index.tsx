import { Dispatch, SetStateAction, FC } from 'react'
import { IPlate } from '../../../../types'
import { MessageConfirmDelete, ContainerButtonsDelete, ButtonCancelDelete, ButtonConfirmDelete } from './style'
import base from '../../../../api/base'
import { toast } from 'react-toastify'

interface Iprops {
    platesMutate: Function
    openEditModal: IPlate | null | undefined
    setOpenEditModal: Dispatch<SetStateAction<IPlate | null | undefined>>
}

const ModalEditContent: FC<Iprops> = ({ platesMutate, openEditModal, setOpenEditModal }) => {
    return <>
        <MessageConfirmDelete>Editar</MessageConfirmDelete>
        <ContainerButtonsDelete>
            <ButtonCancelDelete onClick={() => setOpenEditModal(null)}>Cancelar</ButtonCancelDelete>
            <ButtonConfirmDelete onClick={async () => {
                // await base.delete(`/plates/${openEditModal?._id}`)
                
                await platesMutate()
                
                setOpenEditModal(null)

                toast('Prato editado', {
                    type: 'info'
                })
            }}>Editar prato</ButtonConfirmDelete>
        </ContainerButtonsDelete>
    </>
}

export default ModalEditContent