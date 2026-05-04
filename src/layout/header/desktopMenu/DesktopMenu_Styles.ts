import styled from "styled-components";
import {font, gap} from "../../../styles/Common.ts";

const DesktopMenu = styled.nav`
    ul{
        display: flex;
        justify-content: space-between;
        gap: ${gap({ Gmin: 20, Gmax: 50, minWidth: 768})};
    }
`

const ListItem = styled.li`
    position: relative;
    white-space: nowrap;
    ${font({family: "DM Sans", weight: 500, Fmax: 20, Fmin: 18})};
    
    &:hover {
        transform: scale(1.2);
        transition: all 0.5s ease;
        
        text-decoration: none;
        color: ${({theme}) => theme.colors.hover_color};
        text-shadow: 0 0 8px rgba(124, 92, 255, 0.6);

        &:after {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(-1px);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);

        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.color_menu_hover_dot};

        opacity: 0;
        transition: opacity 0.2s ease;
    }
`

export const S ={
    DesktopMenu,
    ListItem
}