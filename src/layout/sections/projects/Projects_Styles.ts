import styled from "styled-components";
import {media} from "../../../styles/Theme.tsx";

const GridWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 360px));
    gap: 35px;
    justify-content: center;
    margin-top: 40px;

    @media ${media.tablet} {
        display: none;
    }
`

const SliderWrapper = styled.div`
    display: none;

    @media ${media.tablet} {
        padding-top: 30px;
        display: block;
    }
`

const FilterAndSortBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`

export const S = {
    GridWrapper,
    SliderWrapper,
    FilterAndSortBlock
}