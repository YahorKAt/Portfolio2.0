import styled from "styled-components";
import {font, gap, gradientBorder} from "../../../styles/Common.ts";
import {commonColors, media} from "../../../styles/Theme.tsx";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${gap({Gmax: 15, Gmin: 10})};
    padding: 20px;
    border-radius: 20px;
    background: ${({theme}) => theme.colors.bg_section};
    border: ${({theme}) => theme.colors.border_color} 1px solid;

    @media ${media.tablet} {
        padding: 20px;
    }
`

const Title = styled.h3`
    ${font({weight: 600, Fmax: 26, Fmin: 18})};
`

const Text = styled.span`
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin: 10})};
    margin-bottom: 5px;
`

const GradientText = styled.span`
    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    background: ${({theme}) => theme.colors.gradient_primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Field = styled.div<{ $textarea?: boolean }>`
    position: relative;
    display: flex;
    align-items: ${({$textarea}) => $textarea ? "flex-start" : "center"};
    border: 1px solid ${({theme}) => theme.colors.border_color};
    border-radius: 15px;
    color: ${({theme}) => theme.colors.text_secondary};
    outline: none;
    transition: border-color 0.5s;

    &:hover, &:focus-within {
        box-shadow: none;
        ${gradientBorder};
        color: ${({theme}) => theme.colors.color_icon};
        outline: none;
        
    }
`

const IconWrapper = styled.span<{ $textarea?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({$textarea}) => $textarea ? "14px 12px 0" : "0 12px"};
`

const Input = styled.input`
    width: 100%;
    padding: 12px 12px 12px 0;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({lineHeight: 1.6, Fmax: 14, Fmin: 10})};

    &::placeholder {
        color: ${({theme}) => theme.colors.text_secondary};
    }

    &:focus-visible {
        outline: none;
    }
`

const Textarea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 12px 12px 12px 0;
    background: transparent;
    border: none;
    resize: vertical;
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({lineHeight: 1.6, Fmax: 14, Fmin: 10})};
    
    &::placeholder {
        color: ${({theme}) => theme.colors.text_secondary};
    }

    &:focus-visible {
        outline: none;
    }
    
`

const HideText = styled.span`
    ${font({lineHeight: 1.7, Fmax: 12, Fmin: 10})};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`
const SubmitButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    white-space: nowrap;
    padding: 15px;
    border-radius: 15px;
    color: ${commonColors.default_color};
    ${font({Fmax: 16, Fmin: 12})};
    background: ${({theme}) => theme.colors.gradient_btn};
    background-size: 200% 100%;
    background-position: right;
    border: none;
    transition: background-position 0.5s ease;

    &:hover {
        background-position: left;
    }
`

export const S = {
    Form,
    Title,
    Text,
    GradientText,
    Field,
    IconWrapper,
    Input,
    Textarea,
    HideText,
    SubmitButton
}