import styled from "styled-components";
import {font} from "../../styles/Common.ts";

const TextBlock = styled.div`
    ${font({family: "Poppins", Fmax: 16, Fmin: 12})}
    text-align: center;
    background: ${({theme}) => theme.colors.gradient_primary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 20px;
`

const GreyText = styled.span`
    background: none;
    color: ${({theme}) => theme.colors.text_secondary};
    -webkit-text-fill-color: ${({theme}) => theme.colors.text_secondary};
`
export const S = {
    TextBlock,
    GreyText
}