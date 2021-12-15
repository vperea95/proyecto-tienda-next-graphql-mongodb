import { Container, Title, Div } from './styled'

export const ProductosC = () =>{
    return(
        <Container>
            <Div background='green' jcontent='flex-end'>
                <button>Agregar producto</button>
            </Div>
            <Title>Soy productos</Title>
        </Container>
    )
}
export default ProductosC;