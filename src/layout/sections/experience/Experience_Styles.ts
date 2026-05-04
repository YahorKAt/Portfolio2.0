import styled from "styled-components";
import {media} from "../../../styles/Theme.tsx";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media ${media.tablet} {
        grid-template-columns: 1fr;
        gap: 50px;
    }
`

export const S ={
    GridWrapper
}