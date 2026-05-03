import {theme} from "../../../styles/Theme.tsx";
import styled from "styled-components";

const GridWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    justify-content: center;
    justify-items: center;
    gap: 25px;
    margin-top: 40px;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const SliderWrapper = styled.div`
    display: none;

    @media ${theme.media.tablet} {
        padding-top: 30px;
        display: block;
    }
`

export const S = {
    GridWrapper,
    SliderWrapper
}