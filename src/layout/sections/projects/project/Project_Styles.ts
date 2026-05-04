import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";
import {media} from "../../../../styles/Theme.tsx";

const StyledProject = styled.li`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 20px;
    background: ${({theme}) => theme.colors.bg_section};
    border: ${({theme}) => theme.colors.border_color} 1px solid;
`

const Picture = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
`

const InfoBlock = styled.div`
    padding: 20px;

    @media ${media.mobile} {
        padding: 15px;
    }
`

const Title = styled.h4`
    ${font({weight: 600, lineHeight: 1.7, Fmax: 26, Fmin: 18})};
`

const Description = styled.p`
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({lineHeight: 1.7, Fmax: 18, Fmin: 12})}
    margin: 15px 0;
`

const StackText = styled.div`
    ${font({lineHeight: 1.5, weight: 500, Fmax: 16, Fmin: 10})}
    display: inline-block;
    overflow-wrap: anywhere;
    margin-bottom: 20px;

    .stack {
        color: ${({theme}) => theme.colors.text_secondary};
        ${font({weight: 400})};
    }
`

const LinksBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${font({weight: 500, lineHeight: 1.5, Fmax: 18, Fmin: 12})};

    @media ${media.mobile} {
        gap: 15px;
        justify-content: center;
    }
`

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration-skip-ink: none;

    :hover {
        transform: scale(1.02);
        background: ${({theme}) => theme.colors.gradient_btn};

        background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: gradientMove 5s linear infinite;
        transition: all 0.2s ease;

        @keyframes gradientMove {
            0% {
                background-position: 0;
            }
            100% {
                background-position: 200%;
            }
        }
    }

    &:focus {
        outline: none;
        background: linear-gradient(${({theme}) => theme.colors.bg_section}) padding-box, ${({theme}) => theme.colors.gradient_primary} border-box;
        border: 1px solid transparent;
        border-radius: 5px;
    }
`

export const S = {
    StyledProject,
    Picture,
    InfoBlock,
    Title,
    Description,
    StackText,
    LinksBlock,
    Link
}