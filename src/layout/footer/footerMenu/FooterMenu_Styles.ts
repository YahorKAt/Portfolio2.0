import styled from "styled-components";
import {font} from "../../../styles/Common.ts";
import {media} from "../../../styles/Theme.tsx";

const StyledFooterMenu = styled.nav`
    display: flex;

    @media ${media.tablet} {
        display: none;
    }
`

const NavList = styled.ul`
    display: flex;
    ${font({family: "DM Sans", weight: 500, Fmax: 18, Fmin: 16})};
    gap: 50px;
`

const NavItem = styled.li`
    position: relative;
    white-space: nowrap;

    &:active {
        transform: scale(0.9);
    }
`

export const S = {
    StyledFooterMenu,
    NavList,
    NavItem
}