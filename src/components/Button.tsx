import styled, {css} from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {font, gradientBorder} from "../styles/Common.ts";
import * as React from "react";
import {commonColors} from "../styles/Theme.tsx";

type ButtonVariantType = "primary" | "outlined"

type ButtonPropsType = {
    children?: React.ReactNode,
    variant?: ButtonVariantType,
    nameIcon?: string,
    link?: string,
    round?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      children,
                                                      link,
                                                      variant = "primary",
                                                      nameIcon,
                                                      round
                                                  }: ButtonPropsType) => {
    return (
        <StyledButton href={"#" + link} $variant={variant} $round={round}>
            {children}
            {nameIcon && <Icon iconId={nameIcon} width="20" height="20"/>}
        </StyledButton>
    );
};

type StyledButtonPropsType = {
    $variant: ButtonVariantType
    $round?: boolean
}

const StyledButton = styled.a<StyledButtonPropsType>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    white-space: nowrap;
    padding: 15px;
    border-radius: 15px;
    ${font({Fmax: 16, Fmin: 12})};
    z-index: 2;

    ${({$variant}) => $variant === "primary" && css`
        background: ${({theme}) => theme.colors.gradient_btn};
        background-size: 200% 100%;
        background-position: right;
        border: none;
        color: ${commonColors.default_color};
        transition: background-position 0.5s ease;

        &:hover {
            background-position: left;
        }
    `};

    ${({$variant}) => $variant === "outlined" && css`
        background: ${({theme}) => theme.colors.bg_section};
        border: 1px solid ${({theme}) => theme.colors.border_color};
        transition: border-color 0.5s ease;

        &:hover, &:focus {
            ${gradientBorder};
        }
    `};

    @media screen and (max-width: 992px) {
        padding: 15px;
    }
`