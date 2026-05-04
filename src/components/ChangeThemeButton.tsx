import {Icon} from "./icon/Icon.tsx";
import styled from "styled-components";
import * as React from "react";


type PropsType = {
    onToggle: () => void
    isDark: boolean
}

export const ChangeThemeButton: React.FC<PropsType> = ({onToggle, isDark}) => {
    return (
        <Button onClick={onToggle} aria-label="Toggle theme">
            <Icon iconId={isDark ? "sun" : "moon"}
                  width="30"
                  height="30"
                  aria-hidden="true"/>
        </Button>
    );
};

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.text_primary};

    svg:hover {
        transform: scale(1.2);
        transition: all 0.5s ease;
        color: ${({ theme }) => theme.colors.hover_color};
    }
`
