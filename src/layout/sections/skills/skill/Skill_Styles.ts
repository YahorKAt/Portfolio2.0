import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";

const StyledSkill = styled.li`
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_section};
    border-radius: 20px;
    padding: 30px;
    aspect-ratio: 1 / 1;
    min-width: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: ${({theme}) => theme.colors.text_primary};
`

const Title = styled.span`
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({weight: 500, Fmax: 14, Fmin: 12})}
`

export const S = {
    StyledSkill,
    Title,
}