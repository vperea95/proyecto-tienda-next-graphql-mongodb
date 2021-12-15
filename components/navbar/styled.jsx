import styled from 'styled-components'


export const Ul = styled.ul`
    padding: ${({ padding }) => padding || '0'};
    margin: ${({ margin }) => margin || '0'};    
`

export const Li = styled.li`
    border-bottom: solid 1px;
    border-color: #fff;
    padding: 10px 0;
    text-align: center;
    color: #fff;
    cursor: pointer;    
`
