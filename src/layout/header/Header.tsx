import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {Moon} from "../../components/icon/Moon..tsx";
import {S} from "./Header_Styles.ts";
import * as React from "react";


const linksNameList = [
    {id: 1, title: "Home", idName: "home"},
    {id: 2, title: "About", idName: "about"},
    {id: 3, title: "Tech Stack", idName: "skills"},
    {id: 4, title: "Projects", idName: "projects"},
    {id: 5, title: "Contact", idName: "contact"}
]


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <S.H1>I'm a web developer</S.H1> {/*hidden*/}
            <Container>
                <FlexWrapper $justify={"space-between"} $align={"center"} $gap="20px">
                    <Logo text={"My portfolio"}/>
                    {width < breakpoint ? <MobileMenu items={linksNameList}/>
                                        : <DesktopMenu items={linksNameList}/>}
                    <S.RightPanel>
                        <Networks/>
                        <Moon/>
                    </S.RightPanel>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
