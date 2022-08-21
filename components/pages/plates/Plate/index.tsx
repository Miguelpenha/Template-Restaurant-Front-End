import { IPlate } from '../../../../types'
import { Dispatch, FC, SetStateAction } from 'react'
import { Container, Header, Name, Icons, ContainerIconDelete, IconDelete, Price, Description, Created } from './style'

interface Iprops {
    plate: IPlate
    setOpenDeleteModal: Dispatch<SetStateAction<IPlate | null | undefined>>
}

const Plate: FC<Iprops> = ({ plate, setOpenDeleteModal }) => {
    return (
        <Container key={plate._id} title="Ver pedido" onClick={ev => {
            ev.stopPropagation()
            ev.cancelable = true

            // setOpenOrderModal(order)
        }}>
            <Header>
                <Name>{plate.name}</Name>
                <Icons>
                    <ContainerIconDelete onClick={ev => {
                        ev.stopPropagation()
                        ev.cancelable = true

                        setOpenDeleteModal(plate)
                    }}>
                        <IconDelete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                        </IconDelete>
                    </ContainerIconDelete>
                </Icons>
            </Header>
            <Price>{plate.priceConverted}</Price>
            <Description>{plate.description}</Description>
            <Created>Prato criado em {plate.created.date}</Created>
        </Container>
    )
}

export default Plate