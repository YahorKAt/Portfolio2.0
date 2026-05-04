import styled from "styled-components";
import {media} from "../../../styles/Theme.tsx";

const GridWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    justify-content: center;
    justify-items: center;
    gap: 25px;
    margin-top: 30px;

    @media ${media.tablet} {
        display: none;
    }
`

const SliderWrapper = styled.div`
    display: none;

    @media ${media.tablet} {
        display: block;
    }
`

export const S = {
    GridWrapper,
    SliderWrapper
}