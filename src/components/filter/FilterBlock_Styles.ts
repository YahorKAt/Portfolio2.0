import styled from "styled-components";
import {font, gradientBorder} from "../../styles/Common.ts";

const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
`

const Legend = styled.legend`
    display: none;
`

const FiltersList = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

// radio скрыт визуально
const FilterInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`

const FilterLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    ${font({Fmax: 14, Fmin: 12})};

    background: ${({theme}) => theme.colors.bg_section};
    border: 1px solid ${({theme}) => theme.colors.border_color};
    transition: border-color 0.5s ease;

    &:hover {
        ${gradientBorder};
    }

    ${FilterInput}:checked + & {
        ${gradientBorder};
    }
`

export const S = {
    Fieldset,
    Legend,
    FiltersList,
    FilterInput,
    FilterLabel
}