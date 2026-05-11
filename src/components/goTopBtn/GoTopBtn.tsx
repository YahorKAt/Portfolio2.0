import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {gradientBorder} from "../../styles/Common.ts";
import {useEffect, useState} from "react";
import {animateScroll as scroll} from "react-scroll";


export const GoTopBtn = () => {
    const [showBtn, setshowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true);
            } else {
                setshowBtn(false);
            }
        })
    }, [])
    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                    <Icon iconId={"arrow"} width={"30px"} height={"30px"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.a`
    transform: rotate(270deg);
    position: fixed;
    padding: 8px;
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    color: ${({theme}) => theme.colors.text_primary};
    background: ${({theme}) => theme.colors.bg_section};
    border: 1px solid ${({theme}) => theme.colors.border_color};
    transition: border-color 0.5s ease;

    &:hover, &:focus {
        ${gradientBorder};
    }
`