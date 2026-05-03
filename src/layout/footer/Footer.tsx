import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FooterMenu} from "./footerMenu/FooterMenu.tsx";
import {font} from "../../styles/Common.ts";

const linksNameList = [
    {title: "Home", id: "home"},
    {title: "About", id: "about"},
    {title: "Skills", id: "skills"},
    {title: "Projects", id: "projects"},
    {title: "Contact", id: "contact"}
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper $align={"center"} $justify={"center"} $gap={"20px"} $wrap={"wrap"}>
                    <Logo text={"My portfolio"}/>
                    <FooterMenu links={linksNameList}/>
                    <StyledTextBox>
                        <GreyText>Designed and built by </GreyText>Egor
                        Kotkovets with<GreyText> ❤️ </GreyText> & Coffee<GreyText> ☕</GreyText>
                    </StyledTextBox>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
 
`

const StyledTextBox = styled.div`
    ${font({family: "Poppins", Fmax: 16, Fmin: 12})}
    text-align: center;
    background: ${theme.colors.gradient_primary};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    
`

const GreyText = styled.span`
    background: none;
    color: ${theme.colors.text_secondary};
    -webkit-text-fill-color: ${theme.colors.text_secondary};
`
