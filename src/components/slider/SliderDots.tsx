import styled from "styled-components"

export const StyledDots = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
`

export const StyledDot = styled.button<{ $active: boolean }>`
    width: ${({ $active }) => $active ? "24px" : "8px"};
    height: 8px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    transition: width 0.3s ease, background 0.3s ease;
    background: ${({ $active }) =>
    $active
        ? ({ theme }) => theme.colors.text_primary
        : ({ theme }) => theme.colors.border_color};
`
