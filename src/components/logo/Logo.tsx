import styled from "styled-components";
import {font} from "../../styles/Common.ts";
import logo from "../../assets/images/logo.webp";
import * as React from "react";
import {animateScroll as scroll} from "react-scroll";

export const Logo:React.FC = () => {
    return (
        <Link onClick={()=>{scroll.scrollToTop()}} aria-label="site logo">
            <Image src={logo} alt={"logo"}/>
        </Link>
    );
};

const Link = styled.a`
    ${font({family: "DM Sans",  weight: 900, Fmax: 32, Fmin: 26})}
    white-space: nowrap;

    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    background: ${({theme}) => theme.colors.gradient_primary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
`

const Image = styled.img`
    max-width: 50px;
    width: 100%;
    display: flex;
    align-items: center;
`