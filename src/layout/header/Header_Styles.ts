import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {gap} from "../../styles/Common.ts";

const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    padding: 10px 0;
    
    //Blur background
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${theme.colors.header_blur};
        backdrop-filter: blur(12px);
        z-index: -1;
    }

    //Gradient bottom line
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50px;
        right: 50px;
        height: 1px;

        background: linear-gradient(
                190deg,
                transparent,
                ${theme.colors.start_gradient},
                ${theme.colors.end_gradient},
                transparent
        );
    }
`

const H1 = styled.h1`
    display: none;
`

const RightPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 186px;
    width: 100%;
    gap: ${gap({Gmin: 5, Gmax: 30, minWidth: 768})};

    @media ${theme.media.tablet} {
        display: none;
    }
`

export const S = {
    Header,
    H1,
    RightPanel
}