import Link from 'next/link'
import { Ul, Li } from './styled'

export const Navbar = () =>{
    return(
        <>
        <Ul>
            <Link href={'/'}>
                <Li>
                    <a>Home</a>
                </Li>
            </Link>
            
            <Link href={'/compras'}>
                <Li>
                    <a>Compras</a>
                </Li>
            </Link>
            
            <Link href={'/productos'}>
                <Li>               
                    <a>Productos</a>
                </Li>
            </Link>
        </Ul>
        </>
    )
}
export default Navbar;