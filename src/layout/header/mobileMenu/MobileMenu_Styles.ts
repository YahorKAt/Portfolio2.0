import styled, {css} from "styled-components";
import {font} from "../../../styles/Common.ts";

const BurgerButton = styled.button<{ $isVisible: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 4px;
    transition: transform 0.2s ease;

    ${props => !props.$isVisible && css<{ $isVisible: boolean }>`
        display: none;
    `}
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
    transform: translate(-50%, -50%);

    width: 70%;
    z-index: 99999;
    background-color: ${({theme}) => theme.colors.bg_section};
    border: 1px solid ${({theme}) => theme.colors.border_color};
    border-radius: 20px;
    display: none;
    padding: 20px 20px 40px;

    ${props => props.$isVisible && css<{ $isVisible: boolean }>`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
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
    transition: transform 0.2s ease;

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
        transition: all 0.4s ease;

        &::before, &::after {
            background: ${({theme}) => theme.colors.hover_color};
        }
    }
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
`

const ListItem = styled.li`
    position: relative;
    white-space: nowrap;
    padding: 10px 25px;
    border-radius: 5px;
    transition: background-color 0.2s ease;
    max-width: 200px;
    width: 100%;
    ${font({family: "DM Sans", weight: 500, Fmax: 20, Fmin: 18})};

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: ${({theme}) => theme.colors.hover_color};
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    &::after {
        content: '';
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.hover_color};
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.bg_icon};
        transition: all 0.5s ease;

        &::before {
            opacity: 1;
            transition: all 0.5s ease;

        }

        &::after {
            opacity: 1;
            transition: all 0.5s ease;

        }
    }

    &:active {
        transform: translateY(-1px);
    }
`

const IconBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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

export const S ={
    Overlay,
    BurgerButton,
    MobileMenuPopUp,
    CloseButton,
    List,
    ListItem,
    IconBlock
}