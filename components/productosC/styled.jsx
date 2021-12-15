import styled from 'styled-components'

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
  justify-content: ${({jcontent}) => jcontent};
  
`

export const Title = styled.h1`
  font-size: 50px;  
`