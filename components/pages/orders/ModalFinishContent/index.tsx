import { Dispatch, SetStateAction, FC } from 'react'
import { IOrder } from '../../../../types'
import { MessageConfirmFinish, ContainerButtonsFinish, ButtonCancelFinish, ButtonConfirmFinish } from './style'
import base from '../../../../api/base'
import { toast } from 'react-toastify'

interface Iprops {
    ordersMutate: Function
    openFinishModal: IOrder | null | undefined
    setOpenFinishModal: Dispatch<SetStateAction<IOrder | null | undefined>>
}

const ModalFinishContent: FC<Iprops> = ({ ordersMutate, openFinishModal, setOpenFinishModal }) => {
    return <>
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

                toast('Pedido finalizado com sucesso!', {
                    type: 'success'
                })
            }}>Finalizar pedido</ButtonConfirmFinish>
        </ContainerButtonsFinish>
    </>
}

export default ModalFinishContent