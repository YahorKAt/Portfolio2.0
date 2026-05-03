import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        gap: 50px;
    }
`

export const S ={
    GridWrapper
}