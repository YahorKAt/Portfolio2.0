import styled, {css} from "styled-components";
import {font} from "../../../styles/Common.ts";
// import {font} from "../../../styles/Common.ts";

const BurgerButton = styled.button<{ $isVisible: boolean }>`
    ${props => !props.$isVisible && css<{ $isVisible: boolean }>`
        display: none;
    `}

    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px;
    transition: transform 0.5s ease;

    span, span::before, span::after {
        display: block;
        width: 26px;
        height: 2px;
        background-color: ${({theme}) => theme.colors.text_primary};
    }

    span {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            transform: translateY(-8px);
        }

        &::after {
            content: '';
            position: absolute;
            transform: translateY(8px);
        }
    }

    &:hover {
        transform: scale(1.2);

        span, span::before, span::after {
            background-color: ${({theme}) => theme.colors.hover_color};
            box-shadow: 0 0 8px rgba(124, 92, 255, 0.6);
        }
    }
`

const Overlay = styled.div<{ $isVisible: boolean }>`
    display: ${props => props.$isVisible ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background: ${({theme}) => theme.colors.header_blur};
    backdrop-filter: blur(5px);
    z-index: 99999;
`

const MobileMenuPopUp = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 70%;
    z-index: 99999;
    background: ${({theme}) => theme.colors.bg_page};
    border: 1px solid ${({theme}) => theme.colors.border_color};
    border-radius: 20px;
    padding: 20px 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    transform: translate(-50%, -300%);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.6s ease, opacity 0.4s ease, visibility 0.4s ease;


    ${props => props.$isVisible && css`
        transform: translate(-50%, -50%);
        opacity: 1;
        visibility: visible;
    `}
`

const CloseButton = styled.button`
    align-self: flex-end;
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, transform 0.3s ease;

    &::before, &::after {
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${({theme}) => theme.colors.text_primary};
        position: absolute;
    }

    &::before {
        transform: rotate(-45deg);
    }

    &::after {
        transform: rotate(45deg);
    }

    &:hover {
        transform: scale(1.2);

        &::before, &::after {
            background: ${({theme}) => theme.colors.hover_color};
        }
    }
`

const NavList = styled.ul<{ $isVisible: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
`

const NavItem = styled.li<{ $isVisible: boolean; $index: number; $total: number }>`
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    padding: 10px 25px;
    border-radius: 5px;
    max-width: 200px;
    width: 100%;
    ${font({family: "DM Sans", weight: 500, Fmax: 20, Fmin: 18})};

    &::before, &::after {
        content: '';
        position: absolute;
        opacity: 0;
    }

    &::before {
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background-color: ${({theme}) => theme.colors.hover_color};
    }

    &:hover {
        background: ${({theme}) => theme.colors.bg_section};
        color: ${({theme}) => theme.colors.hover_color};

        &::before, &::after {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(-1px);
    }

    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease, color 0.2s ease;

    ${props => props.$isVisible && css`
        opacity: 1;
        transform: translateY(0);
        transition-delay: ${0.6 + (props.$total - 1 - props.$index)  * 0.1}s;
    `}
`

const IconBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    width: 100%;
    position: relative;
    padding-top: 30px;


    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 20px;
        right: 20px;
        height: 2px;

        background: linear-gradient(
                190deg,
                transparent,
                ${({theme}) => theme.colors.start_gradient},
                ${({theme}) => theme.colors.end_gradient},
                transparent
        );
    }

    svg {
        &:hover {
            color: ${({theme}) => theme.colors.hover_color};
        }
    }
`

export const S = {
    Overlay,
    BurgerButton,
    MobileMenuPopUp,
    CloseButton,
    NavList,
    NavItem,
    IconBlock
}