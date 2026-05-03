import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: ${theme.colors.text_primary};
        line-height: 1.2;
        min-width: 320px;
    }

    section, footer {
        padding: 100px 0;

        @media ${theme.media.tablet} {
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
        outline: 2px ${theme.colors.text_primary} solid;
        border-radius: 5px;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('/fonts/dm-sans-v17-latin-regular.woff2') format('woff2');
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('/fonts/dm-sans-v17-latin-500.woff2') format('woff2');
        font-weight: 500;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('/fonts/dm-sans-v17-latin-600.woff2') format('woff2');
        font-weight: 600;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('/fonts/dm-sans-v17-latin-700.woff2') format('woff2');
        font-weight: 700;
        font-display: swap;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url('/fonts/dm-sans-v17-latin-800.woff2') format('woff2');
        font-weight: 800;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/poppins-v24-latin-regular.woff2') format('woff2');
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/poppins-v24-latin-500.woff2') format('woff2');
        font-weight: 500;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/poppins-v24-latin-600.woff2') format('woff2');
        font-weight: 600;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url('/fonts/poppins-v24-latin-900.woff2') format('woff2');
        font-weight: 900;
        font-display: swap;
    }
`