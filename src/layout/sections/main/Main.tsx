import photo from "../../../assets/images/photo/photo.webp"
import photo2x from "../../../assets/images/photo/photo2x.webp"
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {Button} from "../../../components/Button.tsx";
import {font} from "../../../styles/Common.ts";
import abstract from "../../../assets/images/abstract.webp";
import fog from "../../../assets/images/fog3.webp";
import {About} from "../aboutMe/AboutMe.tsx";

export const Main = () => {
    return (
        <Section>
            <Container>
                <GridWrapper>
                    <StyledTitle>
                        <span aria-hidden="true">Hi 👋, I'm</span>
                        <StyledGradientText>Egor Kotkovets</StyledGradientText>
                        <span>l build things for web</span>
                    </StyledTitle>

                    <StyledText>Frontend Developer who loves crafting beautiful, responsive
                        and performant web experiences.
                    </StyledText>

                    <StyledPhotoWrapper>
                        <Glow/>
                        <StyledPhoto src={photo}
                                     srcSet={`${photo2x} 2x`}
                                     alt="photo"
                                     fetchPriority="high"
                                     loading="eager"
                                     decoding="sync"/>
                    </StyledPhotoWrapper>

                    <StyledButtonsBlock>
                        <Button link={'projects'} variant="primary" nameIcon="arrow">View My Work</Button>
                        <Button variant="outlined" nameIcon="download">Download CV</Button>
                    </StyledButtonsBlock>
                </GridWrapper>
            </ Container>
            <About/>
        </Section>
    );
};

const Section = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
        "title  photo"
        "text   photo"
        "buttons photo";
    column-gap: 75px;
    row-gap: 15px;
    align-items: center;


    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        grid-template-areas:
            "title"
            "text"
            "photo"
            "buttons";
    }
`

const StyledTitle = styled.h2`
    grid-area: title;
    display: flex;
    flex-direction: column;
    ${font({weight: 500, lineHeight: 1.4, Fmax: 58, Fmin: 20})}
`

const StyledGradientText = styled.span`
    ${font({weight: 600, Fmax: 58, Fmin: 24})}

    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    margin-left: -1px;
    background: ${theme.colors.gradient_primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StyledText = styled.p`
    grid-area: text;
    ${font({Fmax: 20, Fmin: 14, lineHeight: 1.7, color: theme.colors.text_secondary})}
    align-self: start;
    padding-bottom: 20px;

`

const StyledButtonsBlock = styled.div`
    grid-area: buttons;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 20px;


    @media ${theme.media.tablet} {
        justify-content: center;
        padding-top: 40px;
    }
`

const StyledPhotoWrapper = styled.div`
    grid-area: photo;
    align-self: center;
    margin-right: 16px;
    position: relative;

    // &::before {
    //     content: '';
    //     position: absolute;
    //     background: url(${abstract}) no-repeat;
    //     width: 1540px;
    //     height: 1024px;
    //     top: 50%;
    //     right: -50%;
    //     overflow: hidden;
    //     pointer-events: none;
    //
    //     transform: translateY(-45%);
    //     opacity: 0.2;
    // }
    //
    // &::after {
    //     content: '';
    //     position: absolute;
    //     background: url(${fog}) no-repeat;
    //     background-size: cover;
    //     width: 165%;
    //     height: 150%;
    //     top: 48%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     pointer-events: none;
    //     opacity: 0.3;
    // }


    @media ${theme.media.tablet} {
        justify-self: center;
        margin: 0 35px;
    }

    aspect-ratio: 1 / 1;
    border-radius: 50%;
    padding: 3px;
    background: ${theme.colors.gradient_primary};
    z-index: 1;
`

const StyledPhoto = styled.img`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 1;
`

const Glow = styled.div`
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background: ${theme.colors.gradient_primary};
    filter: blur(40px);
    opacity: 0.7;
`;