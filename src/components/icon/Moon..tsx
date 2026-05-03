import {Icon} from "./Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

export const Moon = () => {
    return (
        <StyledMoon aria-label="Toggle theme">
            <Icon iconId={"sun"}
                  width="40"
                  height="40"
                  aria-label={"sun"}
                  aria-hidden="true"/>
        </StyledMoon>
    );
};

const StyledMoon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.text_primary};
    
    svg:hover {
        transform: scale(1.2);
        transition: all 0.5s ease;
        color: ${theme.colors.hover_color};
    }
`
