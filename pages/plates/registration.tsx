import { Container, HeaderNav, ButtonBack, IconButtonBack, Title } from '../../styles/pages/plates/registration'
import Link from 'next/link'

function Registration() {
    return (
        <Container>
            <HeaderNav>
                <Link href="/plates" passHref>
                    <ButtonBack title="Voltar">
                        <IconButtonBack xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
                            <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>
                        </IconButtonBack>
                    </ButtonBack>
                </Link>
                <Title>Cadastrar Prato</Title>
            </HeaderNav>
        </Container>
    )
}

export default Registration