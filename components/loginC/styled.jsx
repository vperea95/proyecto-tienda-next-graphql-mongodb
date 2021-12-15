import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  display: ${({ display }) => display || 'flex'};
  height: ${({ height }) => height || '100vh'}; 
`
export const Div = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '0'};
  display: ${({ display }) => display || 'flex'};
  width: ${({ width }) => width};
  min-width: ${({ minwidth }) => minwidth};
  height: ${({ height }) => height};
  flex-wrap: wrap;
  border-radius: ${({ bRadius }) => bRadius || '0'};
  justify-content: center;
`

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 10px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  margin: ${({ margin }) => margin || 'auto'};


  &:focus {
    border: 3px solid #58D68D;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
}
`
export const H2 = styled.h2`
  color:${({ color }) => color};
  font-size: ${({ fSize }) => fSize};
  margin : ${({ margin }) => margin || 'auto'};
`
export const Button = styled.button`
  padding: ${({ padding }) => padding || '0'};
  margin : ${({ margin }) => margin || 'auto'};
  font-size: ${({ fSize }) => fSize};
  color: ${({ color }) => color};
  background-color:${({bgColor }) => bgColor};
  border-radius: ${({ bRadius }) => bRadius};
  border  :${({ border }) => border || 'none'} ;
  &:hover {
    background-color: #5DADE2;
    }
`
export const Span = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fSize }) => fSize};
  cursor : ${({ cursor }) => cursor}
`


