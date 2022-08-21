import api from '../../api'
import { IPlate } from '../../types'
import { useState } from 'react'
import { Container, HeaderNav, ButtonBack, IconButtonBack, ContainerIconAdd, IconAdd, Title, PlatesContainer, ModalPlate, ModalDelete } from '../../styles/pages/plates'
import Link from 'next/link'
import Plate from '../../components/pages/plates/Plate'
import Loading from '../../components/Loading'
import ModalPlateContent from '../../components/pages/plates/ModalPlateContent'
import ModalDeleteContent from '../../components/pages/plates/ModalDeleteContent'

function Plates() {
    const { data: plates, mutate: platesMutate } = api.get<IPlate[]>('/plates')
    const [openPlateModal, setOpenPlateModal] = useState<IPlate | null>()
    const [openDeleteModal, setOpenDeleteModal] = useState<IPlate | null>()

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
                <Title>Pratos</Title>
                <Link href="plates/registration" passHref>
                    <ContainerIconAdd title="Cadastrar prato">
                        Cadastrar prato
                        <IconAdd xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </IconAdd>
                    </ContainerIconAdd>
                </Link>
            </HeaderNav>
            <PlatesContainer>
                {plates ? plates.map(plate => (
                    <Plate
                        plate={plate}
                        setOpenPlateModal={setOpenPlateModal}
                        setOpenDeleteModal={setOpenDeleteModal}
                    />
                )) : <Loading/>}
            </PlatesContainer>
            <ModalPlate
                style={{
                    overlay: {
                        display: 'flex',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }
                }}
                isOpen={openPlateModal ? true : false}
                onRequestClose={() => setOpenPlateModal(null)}
            >
                <ModalPlateContent/>
            </ModalPlate>
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
                    platesMutate={platesMutate}
                    openDeleteModal={openDeleteModal}
                    setOpenDeleteModal={setOpenDeleteModal}
                />
            </ModalDelete>
        </Container>
    )
}

export default Plates