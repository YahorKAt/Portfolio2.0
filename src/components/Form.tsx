import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {theme} from "../styles/Theme.tsx";
import {font, gap} from "../styles/Common.ts";
import {Button} from "./Button.tsx";


export const ContactForm = () => {
    return (
        <StyledForm>
            <StyledTitle>Send me a message</StyledTitle>
            <StyledText>Fill out the form below or <GradientText>email me directly.</GradientText></StyledText>
            <StyledField>
                <StyledIcon>
                    <Icon iconId="user2" width="16px" height="16px"/>
                </StyledIcon>
                <StyledInput id="name"
                             name="name"
                             type="text"
                             placeholder="Your Name"/>
            </StyledField>

            <StyledField>
                <StyledIcon>
                    <Icon iconId="mail_logo" width="16px" height="16px"/>
                </StyledIcon>
                <StyledInput id="email"
                             name="email"
                             type="email"
                             placeholder="Your Email"/>
            </StyledField>

            <StyledField $textarea>
                <StyledIcon $textarea>
                    <Icon iconId="pen" width="16px" height="16px"/>
                </StyledIcon>
                <StyledTextarea id="message"
                                name="message"
                                placeholder="Your Message"/>
            </StyledField>
            <Button link={'#'} variant="primary" nameIcon="airplane">Send Message</Button>
            <HideText>
                <Icon iconId="lock" width="12px" height="12px"/>
                Your message will be sent securely
            </HideText>
        </StyledForm>
    );
};


const StyledTitle = styled.h3`
    ${font({weight: 600, Fmax: 26, Fmin: 18})};
`

const StyledText = styled.span`
    ${font({color: theme.colors.text_secondary, Fmax: 14, Fmin: 10})};
    margin-bottom: 5px;
`

const GradientText = styled.span`
    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
    background: ${theme.colors.gradient_primary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${gap({Gmax: 15, Gmin: 10})};
    padding: 20px;
    border-radius: 20px;
    background: ${theme.colors.bg_section};
    border: ${theme.colors.border_color} 1px solid;

    @media ${theme.media.tablet} {
        padding: 20px;
    }
`


const StyledField = styled.div<{ $textarea?: boolean }>`
    position: relative;
    display: flex;
    align-items: ${({$textarea}) => $textarea ? "flex-start" : "center"};
    border: 1px solid ${theme.colors.border_color};
    border-radius: 15px;
    color: ${theme.colors.text_secondary};
    transition: border-color 0.2s;
    outline: none;

    &:hover, &:focus-within {
        outline: none;
        box-shadow: none;
        background: linear-gradient(${theme.colors.bg_section}) padding-box,
        ${theme.colors.gradient_primary} border-box;
        border: 1px solid transparent;
    }
`

const StyledIcon = styled.span<{ $textarea?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({$textarea}) => $textarea ? "14px 12px 0" : "0 12px"};
    flex-shrink: 0;
`

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 12px 12px 0;
    background: transparent;
    border: none;
    outline: none;
    ${font({lineHeight: 1.6, Fmax: 14, Fmin: 10})};

    &::placeholder {
        color: ${theme.colors.text_secondary};
    }
`

const StyledTextarea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 12px 12px 12px 0;
    background: transparent;
    border: none;
    outline: none;
    resize: vertical;
    ${font({lineHeight: 1.6, Fmax: 14, Fmin: 10})};

    &::placeholder {
        color: ${theme.colors.text_secondary};
    }
`

const HideText = styled.span`
    ${font({lineHeight: 1.7, color: theme.colors.text_secondary, Fmax: 12, Fmin: 10})};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`