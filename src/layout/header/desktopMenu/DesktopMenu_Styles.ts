import styled from "styled-components";
import {font, gap} from "../../../styles/Common.ts";
import {Link} from "react-scroll";

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: ${gap({Gmin: 20, Gmax: 50, minWidth: 768})};
`

const NavItem = styled.li`
    transform: scale(1);
    transition: transform 0.5s ease, color 0.5s ease, text-shadow 0.5s ease;

    &:hover {
        transform: scale(1.2);
        color: ${({theme}) => theme.colors.hover_color};
        text-shadow: 0 0 8px rgba(124, 92, 255, 0.6);
    }

    &:active {
        transform: translateY(-1px);
    }
`

const NavLink = styled(Link)`
    white-space: nowrap;
    cursor: pointer;
    ${font({family: "DM Sans", weight: 500, Fmax: 20, Fmin: 18})};

    &.active {
        color: ${({theme}) => theme.colors.hover_color};
        text-shadow: 0 0 8px rgba(124, 92, 255, 0.6);
    }
`

export const S = {
    NavList,
    NavItem,
    NavLink
}