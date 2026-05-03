import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.ts";

const filters = [
    {id: "all", label: "All Projects", iconId: "squares"},
    {id: "HTML", label: "HTML", iconId: "html"},
    {id: "JavaScript", label: "JavaScript", iconId: "javascript"},
    {id: "SASS", label: "SASS", iconId: "sass"},
    {id: "React", label: "React", iconId: "react"},
];

const sortOptions = [
    {id: "newest", label: "Newest First"},
    {id: "oldest", label: "Oldest First"},
    {id: "az", label: "A → Z"},
    {id: "za", label: "Z → A"},
];

export const FilterBlock = () => {
    return (
        <StyledFilterBlock>
            <StyledFilters>
                {filters.map(({id, label, iconId}) => (
                    <StyledFilterBtn key={id}>
                        <Icon iconId={iconId} width="16px" height="16px"/>
                        {label}
                    </StyledFilterBtn>
                ))}
            </StyledFilters>

            <StyledSortWrapper>
                <StyledSelect aria-label="Sort projects by">
                    {sortOptions.map(({id, label}) => (
                        <option key={id} value={id}>{label}</option>
                    ))}
                </StyledSelect>
                <StyledChevron>
                    <Icon iconId="arrow_down" width="16px" height="16px"/>
                </StyledChevron>
            </StyledSortWrapper>
        </StyledFilterBlock>
    );
};

const StyledFilterBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 20px;
`
const StyledFilters = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`

const StyledFilterBtn = styled.button`
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

    &:hover, &:focus{
        outline: none;
        background: linear-gradient(${theme.colors.bg_section}) padding-box,
        ${theme.colors.gradient_primary} border-box;
        border: 1px solid transparent;
    }
`

const StyledSortWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`

const StyledSelect = styled.select`
    appearance: none;
    padding: 8px 40px 8px 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.border_color};
    background: ${theme.colors.bg_section};
    color: ${theme.colors.text_primary};
    cursor: pointer;
    transition: border-color 0.5s;
    ${font({ Fmax: 14, Fmin: 12 })};

    &:hover, &:focus {
        outline: none;
        background: linear-gradient(${theme.colors.bg_section}) padding-box,
        ${theme.colors.gradient_primary} border-box;
        border: 1px solid transparent;
    }

    option {
        background: ${theme.colors.bg_section};
    }
`

const StyledChevron = styled.span`
    position: absolute;
    right: 12px;
    display: flex;
    align-items: center;
    pointer-events: none;
`