import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    min-height: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    //overflow: hidden;
    border: 1px red solid;
    @media ${theme.media.tablet} {
        padding: 0 2rem;
    }
`