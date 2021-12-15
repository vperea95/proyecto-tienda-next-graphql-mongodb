import Head from 'next/head'
import Navbar from './navbar/navbar'
import { Contenedor, DivNavbar, Main } from './styled'

export const Container = (props) => {
    return (
        <Contenedor>
            <Head>
                <title>Tienda Online</title>
            </Head>
            <DivNavbar>
                <Navbar />
            </DivNavbar>
            <Main>
                {props.children}
            </Main>
        </Contenedor>
    )
}

export default Container;