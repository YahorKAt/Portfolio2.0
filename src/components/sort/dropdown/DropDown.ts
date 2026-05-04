import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font, gradientBorder} from "../../styles/Common.ts";

const Sort = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`

const SortButton = styled.button`
    appearance: none;
    display: flex;
    gap: 10px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.border_color};
    background: ${theme.colors.bg_section};
    cursor: pointer;
    transition: border-color 0.5s;
    ${font({Fmax: 14, Fmin: 12})};

    &:hover, &:focus {
        ${gradientBorder};
    }
`

const StyledDropdown = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    width: 100%;
    background: ${theme.colors.bg_section};
    border: 1px solid ${theme.colors.border_color};
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
    transition: border-color 0.5s;
    
    &:hover, &:focus {
        ${gradientBorder};
    }
`

const DropdownItem = styled.li<{ $active?: boolean }>`
    padding: 8px 16px;
    cursor: pointer;
    ${font({Fmax: 14, Fmin: 12})};

    ${({$active}) => $active && css`
        background: ${theme.colors.gradient_primary};
    `}
    
    &:hover {
        background: ${theme.colors.bg_icon};
    }
`

const Chevron = styled.span<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export const S = {
    StyledDropdown,
    DropdownItem,
    Sort,
    SortButton,
    Chevron
}