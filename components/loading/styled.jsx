import styled, { keyframes } from "styled-components";


export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

export const DotWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Dot = styled.div`
  background-color: #2b3595;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`
// otro

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(244, 244, 244, 0.3);
`;

export const BouncerCountainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;
  height: 100px;
  margin: auto;
  position: relative;
  top: 30%;
`;

const bouncer = keyframes`
    from { transform: translateY(0) }
    to { transform: translateY(-100px) }
`;

export const BouncingBallOne = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.background || "#0077ff"};
  border-radius: 50%;
  animation-name: ${bouncer};
  animation-duration: 0.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.19, 0.57, 0.3, 0.98);
`;

export const BouncingBallTwo = styled(BouncingBallOne)`
  animation-delay: 0.1s;
  opacity: 0.8;
`;

export const BouncingBallThree = styled(BouncingBallOne)`
  animation-delay: 0.2s;
  opacity: 0.6;
`;

export const BouncingBallFour = styled(BouncingBallOne)`
  animation-delay: 0.3s;
  opacity: 0.4;
`;

