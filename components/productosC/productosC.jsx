import { Container, Title, Div, Table, Tr, Th, Td, Button } from './styled'
import { useQuery } from '@apollo/client'
import { OBTENER_PRODUCTOS } from './querys'

const ProductosC = () => {
    const { data, loading } = useQuery(OBTENER_PRODUCTOS);
    console.log(data)
    if (loading) return 'Cargando'
    return (
        <Container>
            <Div jcontent='flex-end'>
                <Button fSize ='20px'crear bRadius='8px' margin='0 0 0 5px' padding='5px' bgColor='#fff' border='solid 2px #08a8e7' color='#000'>Agregar producto</Button>
            </Div>
            <Div margin='50px 0 0 0 '>
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

                            <Td>{i + 1}</Td>
                            <Td>{Producto.Nombre}</Td>
                            <Td>{Producto.cantidad}</Td>
                            <Td>{Producto.codigo}</Td>
                            <Td>{Producto.descripcion}</Td>
                            <Td>{Producto.precio}</Td>
                            <Td>
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