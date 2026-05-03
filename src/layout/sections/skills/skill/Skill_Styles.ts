import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {font} from "../../../../styles/Common.ts";

const StyledSkill = styled.li`
    border: ${theme.colors.border_color} 1px solid;
    background: ${theme.colors.bg_section};
    border-radius: 20px;
    padding: 10px;
    aspect-ratio: 1 / 1;
    max-width: 160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: ${theme.colors.text_primary};
`

const Title = styled.span`
    ${font({weight: 500, Fmax: 14, Fmin: 12, color: theme.colors.text_secondary})}
`

export const S = {
    StyledSkill,
    Title,
}