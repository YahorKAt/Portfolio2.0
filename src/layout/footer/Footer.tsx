import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FooterMenu} from "./footerMenu/FooterMenu.tsx";
import {S} from "./Footer_Styles.ts";
import styled from "styled-components";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper $align={"center"} $justify={"center"} $gap={"50px"} $wrap={"wrap"}>
                    <Logo/>
                    <FooterMenu/>
                </FlexWrapper>
                <S.TextBlock>
                    <S.GreyText>Designed and built by </S.GreyText>Egor
                    Kotkovets with<S.GreyText> ❤️ </S.GreyText> & Coffee<S.GreyText> ☕</S.GreyText>
                </S.TextBlock>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    position: relative;
 
    &::after {
        content: "";
        position: absolute;
        top: 25px;
        left: 50px;
        right: 50px;
        height: 1px;

        background: linear-gradient(
                190deg,
                transparent,
                ${({theme}) => theme.colors.start_gradient},
                ${({theme}) => theme.colors.end_gradient},
                transparent
        );
    }
`