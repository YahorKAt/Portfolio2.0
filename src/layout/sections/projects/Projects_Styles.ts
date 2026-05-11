import styled from "styled-components";
import {media} from "../../../styles/Theme.tsx";

const GridWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 360px));
    gap: 35px;
    justify-content: center;
    margin-top: 40px;

    @media screen and (max-width: 803px) {
        display: none;
    }
`

const Slider = styled.div`
    display: none;

    @media screen and (max-width: 803px) {
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


const Tablet = styled.div`
    display: none;

    @media screen and (max-width: 803px) {
        display: block;
    }

    @media ${media.mobile} {
        display: none;
    }
`

const Mobile = styled.div`
    display: none;
    margin-top: 30px;

    @media ${media.mobile} {
        display: block;
    }
`

export const S = {
    GridWrapper,
    Slider,
    FilterAndSortBlock,
    Tablet,
    Mobile
}