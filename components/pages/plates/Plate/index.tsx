import { IPlate } from '../../../../types'
import { Dispatch, FC, SetStateAction } from 'react'
import { Container, Main, ContainerImage, Image, Informations, Header, Name, Icons, ContainerIconOption, IconOption, Price, Description, Created } from './style'
import Link from 'next/link'

interface Iprops {
    plate: IPlate
    setOpenEditModal: Dispatch<SetStateAction<IPlate | null | undefined>>
    setOpenPlateModal: Dispatch<SetStateAction<IPlate | null | undefined>>
    setOpenDeleteModal: Dispatch<SetStateAction<IPlate | null | undefined>>
}

const Plate: FC<Iprops> = ({ plate, setOpenEditModal, setOpenPlateModal, setOpenDeleteModal }) => {
    return (
        <Container key={plate._id} title="Ver pedido" onClick={ev => {
            ev.stopPropagation()
            ev.cancelable = true

            setOpenPlateModal(plate)
        }}>
            <Main>
                <Link href={plate.photo.url} passHref>
                    <ContainerImage target="_blank" title="Abrir foto" onClick={ev => {
                        ev.stopPropagation()
                        ev.cancelable = true
                    }}>
                        <Image src={plate.photo.url}/>
                    </ContainerImage>
                </Link>
                <Informations>
                    <Header>
                        <Name>{plate.name}</Name>
                        <Icons>
                            <ContainerIconOption onClick={ev => {
                                ev.stopPropagation()
                                ev.cancelable = true

                                setOpenDeleteModal(plate)
                            }}>
                                <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                                </IconOption>
                            </ContainerIconOption>
                            <ContainerIconOption onClick={ev => {
                                ev.stopPropagation()
                                ev.cancelable = true

                                setOpenEditModal(plate)
                            }}>
                                <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
                                </IconOption>
                            </ContainerIconOption>
                        </Icons>
                    </Header>
                    <Price>{plate.priceConverted}</Price>
                    <Description>{plate.description}</Description>
                </Informations>
            </Main>
            <Created>Prato criado em {plate.created.date}</Created>
        </Container>
    )
}

export default Plate