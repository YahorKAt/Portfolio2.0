import styled from "styled-components";
import {font, gap} from "../../../styles/Common.ts";
import {media} from "../../../styles/Theme.tsx";

const AboutBlock = styled.div`
    padding-top: 100px;
    position: relative;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 30px;
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_section};
    border-radius: 20px;
    overflow: hidden;
    
    @media ${media.mobile} {
        grid-template-columns: 1fr;
    }
`

const LeftBlock = styled.div`
  
`

const Text = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px;

    color: ${({ theme }) => theme.colors.text_secondary};
    ${font({lineHeight: 1.5, Fmax: 18, Fmin: 12})};
    margin-top: 20px;
`

const RightBlock = styled.div`
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
    gap: ${gap({Gmin: 20, Gmax: 30})};

    @media ${media.tablet} {
        grid-template-columns: 1fr;
        justify-self: center;
    }

    @media ${media.mobile} {
        justify-self: start;
    }
`

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(12px, 1.5vw, 20px);
`

const IconBox = styled.div`
    max-width: 64px;
    padding: 10px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_icon};

    display: flex;
    align-items: center;
    justify-content: center;
`

const Label = styled.span`
    display: block;
    ${font({weight: 600, Fmax: 18, Fmin: 16})};
    margin-bottom: 5px;
`

const Value = styled.span`
    display: block;
    word-break: break-word;
    color: ${({ theme }) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin: 10})};
`

export const S ={
    AboutBlock,
    GridWrapper,
    LeftBlock,
    Text,
    RightBlock,
    InfoItem,
    IconBox,
    Label,
    Value,
}