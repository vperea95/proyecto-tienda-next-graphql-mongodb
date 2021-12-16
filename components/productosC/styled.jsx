import styled, { css } from 'styled-components'


export const Container = styled.div`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  display: ${({ display }) => display};
  height: ${({ height }) => height || '100vh'}; 
`

export const Div = styled.div`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  background: ${({ background }) => background};
  display: ${({ display }) => display || 'flex'};
  justify-content: ${({ jcontent }) => jcontent};
  
`

export const Title = styled.h1`
  font-size: 50px;  
`

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`
export const Th = styled.th`
  border: 2px solid #ffffff;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
`

export const Tr = styled.tr`
  background-color: #f2f2f2;
  &:hover{
    background-color: #ddd;
  }
`

export const Td = styled.td`
  border: 2px solid #ffffff;
  padding: 8px;
  min-width:${({ minwidth }) => minwidth};
`
export const Button = styled.button`
  font-size:${({ fSize }) => fSize} ;
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin};
  background-color:${({ bgColor }) => bgColor}; 
  color:${({ color }) => color}; 
  border: ${({ border }) => border};
  border-radius: ${({ bRadius }) => bRadius};
  ${({ crear }) => crear && css`
    &:hover {
      background-color:#08a8e7;
      color:#fff;
    }    
    ;`}
  ${({ editar }) => editar && css`
    &:hover {
      background-color:#EE790C;
      color:#fff;
    }    
    ;`}

  ${({ eliminar }) => eliminar && css`
  &:hover {
    background-color:#EE0C0C;
    color:#fff;
  }    
  ;`}
`