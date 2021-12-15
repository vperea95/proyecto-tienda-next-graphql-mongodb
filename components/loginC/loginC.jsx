import Link from 'next/link'
import { Container, Input, Div, H2, Button, Span} from './styled'
const LoginC = () => {
    return(
        <Container padding='15px'>
            <Div minwidth='230px' bRadius='10px' width='350px' padding='30px' bgColor='#95A5A6'>
            <H2 color='#fff' fSize='30px' margin='0 0 25px 0'>LOGIN</H2>
                <Input 
                    margin='8px 0 8px 0'
                    placeholder='Usuario "Email"'
                />
                <Input
                    margin='8px 0 8px 0'
                    type = 'password'
                    placeholder='Contrasena'
                />
                <Button 
                    bgColor='#3498DB' 
                    color='#fff'
                    padding='10px'
                    fSize='16px'
                    margin='15px 0 0 0'
                    bRadius='10px'
                    type='submit'
                >
                    Ingresar
                </Button>
                <Link href='/register'>
                    <Span cursor='pointer'>Register</Span>
                </Link>
            </Div>
        </Container>
    )
}

export default LoginC