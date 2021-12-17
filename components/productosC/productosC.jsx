import { Container, Title, Div, Table, Tr, Th, Td, Button } from './styled'
import { useQuery } from '@apollo/client'
import { OBTENER_PRODUCTOS } from './querys'
import Loading from '../loading/loading'


const ProductosC = () => {
    const { data, loading } = useQuery(OBTENER_PRODUCTOS);
    if (loading) return (<Loading background="green"></Loading>)
    return (
        <Container>
            <Div jcontent='flex-end' padding='15px' margin='0px 30px 0 30px '>
                <Button fSize ='20px'crear bRadius='8px' margin='0 0 0 5px' padding='5px' bgColor='#fff' border='solid 2px #08a8e7' color='#000'>Agregar producto</Button>
            </Div>
            <Div margin='50px 30px 0 30px ' padding='15px'>
                <Table>
                    <thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
                            <Th>Codigo</Th>
                            <Th>Descripcion</Th>
                            <Th>Precio</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {data.obtenerProductos.map((Producto, i) => (<Tr key={Producto.id}>

                            <Td tAlign='center'>{i + 1}</Td>
                            <Td tAlign='start'>{Producto.Nombre}</Td>
                            <Td tAlign='center'>{Producto.cantidad}</Td>
                            <Td tAlign='center'>{Producto.codigo}</Td>
                            <Td>{Producto.descripcion}</Td>
                            <Td tAlign='end'>{Producto.precio}</Td>
                            <Td tAlign='center'>
                                <Button bRadius='8px' margin='0 5px 0 0' padding='5px' bgColor='#fff' border='solid 2px #EE790C' color='#000' editar >
                                    Editar
                                </Button>
                                <Button bRadius='8px' margin='0 0 0 5px' padding='5px' bgColor='#fff' border='solid 2px #EE0C0C' color='#000' eliminar >
                                    Eliminar
                                </Button>
                            </Td>

                        </Tr>

                        ))}
                    </tbody>

                </Table>
            </Div>

        </Container>
    )
}
export default ProductosC;