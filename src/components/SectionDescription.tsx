import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.ts";

export const SectionDescription = styled.h3`
    ${font({ lineHeight: 1.4, Fmax: 24, Fmin:14, color: theme.colors.text_secondary})}
    margin-left: 47px;
    
`