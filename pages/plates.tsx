import api from '../api'
import { IPlate } from '../types'
import { useState } from 'react'
import { Container, HeaderNav, ButtonBack, IconButtonBack, Title, PlatesContainer, ModalDelete } from '../styles/pages/plates'
import Link from 'next/link'
import Plate from '../components/pages/plates/Plate'
import Loading from '../components/Loading'
import ModalDeleteContent from '../components/pages/plates/ModalDeleteContent'

function Plates() {
    const { data: plates, mutate: platesMutate } = api.get<IPlate[]>('/plates')
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
            </HeaderNav>
            <PlatesContainer>
                {plates ? plates.map(plate => <Plate plate={plate} setOpenDeleteModal={setOpenDeleteModal}/>) : <Loading/>}
            </PlatesContainer>
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