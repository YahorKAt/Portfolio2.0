import styled from "styled-components";
import {font} from "../styles/Common.ts";

export const SectionDescription = styled.h3`
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({lineHeight: 1.4, Fmax: 24, Fmin: 14})}
    margin-left: 47px;

`