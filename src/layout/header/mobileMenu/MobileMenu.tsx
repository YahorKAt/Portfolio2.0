import {Networks} from "../../../components/networks/Networks.tsx";
import {ChangeThemeButton} from "../../../components/ChangeThemeButton.tsx";
import {S} from "./MobileMenu_Styles.ts"

type MenuPropsType = {
    items: Array<{ id: number, title: string; idName: string }>,
    onToggle: () => void
    isDark: boolean
}


export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <nav>
            <S.Overlay $isVisible={false}/>
            <S.BurgerButton $isVisible={true}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp $isVisible={false}>
                <S.CloseButton>
                    <span></span>
                </S.CloseButton>

                <S.List>
                    {props.items.map((item) =>
                        <S.ListItem key={item.id}>
                            <a href={"#" + item.idName}>{item.title}</a>
                        </S.ListItem>)}
                </S.List>
                <S.IconBlock>
                    <Networks/>
                    <ChangeThemeButton onToggle={props.onToggle} isDark={props.isDark}/>
                </S.IconBlock>
            </S.MobileMenuPopUp>
        </nav>
    );
};

