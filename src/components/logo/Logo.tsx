import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common.ts";
import * as React from "react";

type LogoPropsType = {
    text: string;
}

export const Logo:React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <Link href="/" aria-label="site logo">
            {props.text}
        </Link>
    );
};

const Link = styled.a`
    ${font({family: "DM Sans",  weight: 900, Fmax: 32, Fmin: 26})}
    white-space: nowrap;

    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    background: ${theme.colors.gradient_primary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
`