import Link from 'next/link'
import { Container, Input, Div, H2, Button, Span, Form, Hr, DivError } from './styled'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const RegisterC = () => {
    const formik = useFormik({
        initialValues: {
            pNombre: '',
            sNombre: '',
            pApellido: '',
            sApellido: '',
            celular: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            pNombre: Yup.string().required('Campo  Obligatorio.'),
            pApellido: Yup.string().required('Campo  Obligatorio.'),
            email: Yup.string().email('El Email no es valido.').required('Campo  Obligatorio.'),
            password: Yup.string().min(8,'la contraseña debe contener como minimo 8 caracteres').required('Campo  Obligatorio.'),
        }),
        onSubmit: datos => {
            console.log('enviando valores')
            console.log(datos)
        }
    })

    return (
        <Container padding='15px'>
            <Div minwidth='230px' bRadius='10px' width='350px' padding='30px' bgColor='#839192'>
                <H2 color='#fff' fSize='30px' margin='0 0 10px 0'>REGISTER</H2>
                <Hr width='100%'></Hr>


                <Form onSubmit={formik.handleSubmit}>

                    <Input
                        id='pNombre'
                        margin='8px 0 8px 0'
                        type='text'
                        value={formik.values.pNombre}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Primer Nombre'
                    />
                    {formik.touched.pNombre && formik.errors.pNombre ? (
                        <DivError bgColor='#ee7b7b'
                        width='100%'
                        padding='10px 0 10px 15px'
                        border='4px solid'
                        borderColor='#ff0000'>
                            <Span
                            fSize='12px'
                            color='#fff'
                            >{formik.errors.pNombre}</Span>
                        </DivError>
                    ): null}
                    <Input
                        id='sNombre'
                        margin='8px 0 8px 0'
                        type="text"
                        value={formik.values.sNombre}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Segundo Nombre' />
                    <Input
                        id='pApellido'
                        margin='8px 0 8px 0'
                        type="text"
                        value={formik.values.pApellido}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Primer Apellido' />
                    {formik.touched.pApellido && formik.errors.pApellido ? (
                        <DivError bgColor='#ee7b7b'
                        width='100%'
                        padding='10px 0 10px 15px'
                        border='4px solid'
                        borderColor='#ff0000'>
                            <Span
                            fSize='12px'
                            color='#fff'
                            >{formik.errors.pApellido}</Span>
                        </DivError>
                    ): null}
                    <Input
                        id='sApellido'
                        margin='8px 0 8px 0'
                        type="text"
                        value={formik.values.sApellido}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Segundo Apellido' />
                    <Input
                        id='celular'
                        margin='8px 0 8px 0'
                        type="number"
                        value={formik.values.celular}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Celular' />
                    <Input
                        id='email'
                        margin='8px 0 8px 0'
                        type="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Email' />
                    {formik.touched.email && formik.errors.email ? (
                        <DivError bgColor='#ee7b7b'
                        width='100%'
                        padding='10px 0 10px 15px'
                        border='4px solid'
                        borderColor='#ff0000'>
                            <Span
                            fSize='12px'
                            color='#fff'
                            >{formik.errors.email}</Span>
                        </DivError>
                    ): null}
                    <Input
                        id='password'
                        margin='8px 0 8px 0'
                        type='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder='Contrasena'
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <DivError bgColor='#ee7b7b'
                        width='100%'
                        padding='10px 0 10px 15px'
                        border='4px solid'
                        borderColor='#ff0000'>
                            <Span
                            fSize='12px'
                            color='#fff'
                            >{formik.errors.password}</Span>
                        </DivError>
                    ): null}
                    <Button
                        bgColor='#3498DB'
                        color='#fff'
                        padding='10px'
                        fSize='16px'
                        margin='15px 0 0 0'
                        bRadius='10px'
                        type='submit'
                    >
                        Registrarse
                    </Button>
                </Form>
                <Link href='/login'>
                    <Span  
                    margin='15px 0 15px 0'              cursor='pointer'
                        fSize='20px'
                        padding='0 0 4px 0'
                        borderColor='#fff'
                        border='solid 1px'
                        color='#fff'
                    >Login</Span>
                </Link>
            </Div>
        </Container>
    )
}

export default RegisterC