import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {FooterMenu} from "./footerMenu/FooterMenu.tsx";
import {S} from "./Footer_Styles.ts";

const linksNameList = [
    {title: "Home", id: "home"},
    {title: "About", id: "about"},
    {title: "Skills", id: "skills"},
    {title: "Projects", id: "projects"},
    {title: "Contact", id: "contact"}
]

export const Footer:React.FC = () => {
    return (
        <footer>
            <Container>
                <FlexWrapper $align={"center"} $justify={"center"} $gap={"20px"} $wrap={"wrap"}>
                    <Logo text={"My portfolio"}/>
                    <FooterMenu links={linksNameList}/>
                    <S.TextBlock>
                        <S.GreyText>Designed and built by </S.GreyText>Egor
                        Kotkovets with<S.GreyText> ❤️ </S.GreyText> & Coffee<S.GreyText> ☕</S.GreyText>
                    </S.TextBlock>
                </FlexWrapper>
            </Container>
        </footer>
    );
};