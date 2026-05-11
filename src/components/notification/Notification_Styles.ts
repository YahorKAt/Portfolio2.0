import styled from "styled-components";
import {font} from "../../styles/Common.ts";

const Wrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 10px;
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 16px;
    border-radius: 15px;
    max-width: 280px;
    background: ${({theme}) => theme.colors.bg_section};
    border: 1px solid ${({theme}) => theme.colors.border_color};
`

const Icon = styled.div<{ $success: boolean }>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${({theme}) => theme.colors.text_primary};
    background: ${({$success}) => $success ? "#1FA944" : "#A32D2D"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
`

const Text = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h5 {
        ${font({weight: 600, Fmax: 16, Fmin: 14})};
    }

    p {
        ${font({lineHeight: 1.4, Fmax: 13, Fmin: 11})};
        color: ${({theme}) => theme.colors.text_secondary};
    }
`
const Close = styled.button`
    color: ${({theme}) => theme.colors.text_secondary};
    font-size: 16px;
    align-self: flex-start;
    transition: color 0.3s ease;

    &:hover {
        color: ${({theme}) => theme.colors.text_primary};
    }
`

export const S = {
    Wrapper,
    Icon,
    Text,
    Close
}