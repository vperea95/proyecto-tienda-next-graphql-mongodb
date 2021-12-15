import { Container, Title, Div } from './styled'
import { useQuery } from '@apollo/client'
import { OBTENER_PRODUCTOS } from './querys'

const ProductosC = () => {
    const { data, loading } = useQuery(OBTENER_PRODUCTOS);
    console.log(data)
    if(loading) return 'Cargando'
    return (
        <Container>
            <Div background='green' jcontent='flex-end'>
                <button>Agregar producto</button>
            </Div>
            <Title>Soy productos</Title>
            

        
        </Container>
    )
}
export default ProductosC;