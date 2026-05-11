import {createGlobalStyle} from "styled-components";
import {media} from "./Theme.tsx";
import { fonts } from './fonts'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.colors.text_primary};
        line-height: 1.2;
        min-width: 320px;
    }

    section, footer {
        padding: 100px 0;

        @media ${media.tablet} {
            padding: 50px 0;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: unset;
    }

    :focus-visible {
        outline: 2px ${({theme}) => theme.colors.text_primary} solid;
        border-radius: 5px;
    }

    ${fonts}
`