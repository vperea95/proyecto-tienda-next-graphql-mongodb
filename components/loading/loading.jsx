import { BouncerCountainer, BouncingBallFour, BouncingBallOne, BouncingBallThree, BouncingBallTwo, Dot, DotWrapper, Overlay } from "./styled";

// export const Loading = () => {
//     return (
//         <>
//             <DotWrapper>
//                 <Dot delay="0s" />
//                 <Dot delay=".1s" />
//                 <Dot delay=".2s" />
//                 <Dot delay="0s" />
//                 <Dot delay=".1s" />
//                 <Dot delay=".2s" />
//             </DotWrapper>
//         </>
//     )
// }

// export default Loading;

const Loading = ({ background }) => {
    return (
      <>
        {background && (
          <Overlay>
            <BouncerCountainer>
              <BouncingBallOne background={background} />
              <BouncingBallTwo background={background} />
              <BouncingBallThree background={background} />
              <BouncingBallFour background={background} />
            </BouncerCountainer>
          </Overlay>
        )}
      </>
    );
  };
  
  export default Loading;