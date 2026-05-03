import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common.ts";

const TextBlock = styled.div`
    ${font({family: "Poppins", Fmax: 16, Fmin: 12})}
    text-align: center;
    background: ${theme.colors.gradient_primary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const GreyText = styled.span`
    background: none;
    color: ${theme.colors.text_secondary};
    -webkit-text-fill-color: ${theme.colors.text_secondary};
`
export const S = {
    TextBlock,
    GreyText
}