import styled from "styled-components";
import type {CSSProperties} from "react";

type FlexWrapperProps = {
    $direction?: CSSProperties["flexDirection"];
    $justify?: CSSProperties["justifyContent"];
    $align?: CSSProperties["alignItems"];
    $wrap?: CSSProperties["flexWrap"];
    $gap?: CSSProperties["gap"];
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${({ $direction }) => $direction || null};
    justify-content: ${({ $justify }) => $justify || null};
    align-items: ${({ $align }) => $align || null};
    flex-wrap: ${({ $wrap }) => $wrap || null};
    gap: ${({ $gap }) => $gap || null};
    height: 100%;
 
`