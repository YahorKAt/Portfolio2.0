import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font, gradientBorder} from "../../styles/Common.ts";

const StyledFilterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 20px;
`

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

    background: ${theme.colors.bg_section};
    border: 1px solid ${theme.colors.border_color};
    transition: border-color 0.5s ease;

    &:hover {
        ${gradientBorder};
    }

    ${FilterInput}:checked + & {
        ${gradientBorder};
    }
`

const Sort = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`

const Select = styled.select`
    appearance: none;
    padding: 8px 40px 8px 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.border_color};
    background: ${theme.colors.bg_section};
    color: ${theme.colors.text_primary};
    cursor: pointer;
    transition: border-color 0.5s;
    ${font({Fmax: 14, Fmin: 12})};

    &:hover, &:focus {
        ${gradientBorder};
    }


    option {
        background: ${theme.colors.bg_section};
    }
`

const Chevron = styled.span`
    position: absolute;
    right: 12px;
    display: flex;
    align-items: center;
    pointer-events: none;
`

const Label = styled.label`
    display: none;
`

export const S = {
    StyledFilterBlock,
    Fieldset,
    Legend,
    FiltersList,
    Select,
    Sort,
    FilterInput,
    FilterLabel,
    Chevron,
    Label,
}