import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {ChangeThemeButton} from "../../components/ChangeThemeButton.tsx";
import {S} from "./Header_Styles.ts";
import * as React from "react";

type HeaderPropsType = {
    onToggle: () => void
    isDark: boolean
}

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
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
                    <Logo/>
                    {width <= breakpoint ? <MobileMenu onToggle={props.onToggle} isDark={props.isDark}/>
                        : <DesktopMenu/>}
                    <S.RightPanel>
                        <Networks/>
                        <ChangeThemeButton onToggle={props.onToggle} isDark={props.isDark}/>
                    </S.RightPanel>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
