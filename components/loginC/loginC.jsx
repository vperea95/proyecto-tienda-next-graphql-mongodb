import Link from 'next/link'
import { Container, Form, Input, Div, H2, Button, Span, Hr} from './styled'
const LoginC = () => {
    return(
        <Container padding='15px'>
            <Div minwidth='230px' bRadius='10px' width='350px' padding='30px' bgColor='#839192'>
            <H2 color='#fff' fSize='30px' margin='0 0 10px 0'>LOGIN</H2>
            <Hr width='100%'></Hr>
                <Form>

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
                </Form>
                <Link href='/register'>
                    <Span margin='15px 0 15px 0' cursor='pointer'
                    fSize='20px'
                    padding='0 0 4px 0'
                    borderColor='#fff'
                    border='solid 1px'
                    color='#fff'>Register</Span>
                </Link>
            </Div>
        </Container>
    )
}

export default LoginC