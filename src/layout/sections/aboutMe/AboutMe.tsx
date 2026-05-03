import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {font} from "../../../styles/Common.ts";
import {Container} from "../../../components/Container.tsx";

type InfoItemType = {
    iconId: string;
    label: string;
    value: string;
}

const infoItems: InfoItemType[] = [
    {iconId: "user", label: "Name", value: "Egor Kotkovec"},
    {iconId: "myLocation", label: "Location", value: "Minsk, Belarus"},
    {iconId: "email", label: "Email", value: "fgkfghjgeadfec@gmail.com"},
    {iconId: "clock", label: "Availability", value: "Open to work"},
];

export const About = () => {
    return (
        <StyledAbout id="about">
            <Container>
                <GridWrapper>
                    <StyledLeftBlock>
                        <SectionTitle icon="about">About Me</SectionTitle>
                        <StyledText>
                            <span>I'm a frontend developer based in Minsk, Belarus.</span>
                            <span>I enjoy turning complex problems into simple, beautiful and intuitive interfaces.</span>
                            <span>I love working with modern web technologies to build fast, accessible and delightful products.</span>
                        </StyledText>
                    </StyledLeftBlock>

                    <StyledRightBlock>
                        {infoItems.map((item) => (
                            <StyledInfoItem key={item.iconId}>
                                <StyledIconBox>
                                    <Icon iconId={item.iconId} width="32" height="32"/>
                                </StyledIconBox>
                                <div>
                                    <StyledLabel>{item.label}</StyledLabel>
                                    <StyledValue>{item.value.replace('@', '\u200B@')}</StyledValue>
                                </div>
                            </StyledInfoItem>
                        ))}
                    </StyledRightBlock>
                </GridWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    padding-top: 100px;
    z-index: 10;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 30px;
    border: ${theme.colors.border_color} 1px solid;
    background: ${theme.colors.bg_section};
    border-radius: 20px;
    overflow: hidden;


    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
    }
`

const StyledLeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledText = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${font({lineHeight: 1.65, color: theme.colors.text_secondary, Fmax: 18, Fmin: 12})};
    margin-top: 20px;
`

const StyledRightBlock = styled.div`
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr);
    gap: 30px;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
    }

    @media ${theme.media.mobile} {
        justify-items: start;
    }
`

const StyledInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(12px, 1.5vw, 20px);
`

const StyledIconBox = styled.div`
    min-width: 64px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: ${theme.colors.border_color} 2px solid;
    background: ${theme.colors.bg_icon};

    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledLabel = styled.span`
    display: block;
    ${font({weight: 600, Fmax: 18, Fmin: 16})};
    margin-bottom: 10px;
`

const StyledValue = styled.span`
    display: block;
    word-break: break-word;
    ${font({Fmax: 14, Fmin: 10, color: theme.colors.text_secondary})};
`