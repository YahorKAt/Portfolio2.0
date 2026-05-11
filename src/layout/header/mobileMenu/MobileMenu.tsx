import {useState} from "react";
import {Networks} from "../../../components/networks/Networks.tsx";
import {ChangeThemeButton} from "../../../components/ChangeThemeButton.tsx";
import {S} from "./MobileMenu_Styles.ts"
import {NAV_ITEMS} from "../../../data/navigation.ts";
import {Link} from "react-scroll";

type MenuPropsType = {
    onToggle: () => void
    isDark: boolean
}

export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }
    return (
        <>
            <S.Overlay $isVisible={menuIsOpen} onClick={() => {
                setmenuIsOpen(false)
            }}/>
            <S.BurgerButton $isVisible={!menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp $isVisible={menuIsOpen}>
                <S.CloseButton onClick={onBurgerBtnClick}>
                    <span></span>
                </S.CloseButton>


                <nav>
                    <S.NavList $isVisible={menuIsOpen}>
                        {NAV_ITEMS.map((item, index) =>
                            <S.NavItem key={item.id}
                                       $isVisible={menuIsOpen}
                                       $total={NAV_ITEMS.length}
                                       $index={index}
                                       onClick={onBurgerBtnClick}>
                                <Link to={item.idName}
                                      smooth={true}
                                      activeClass="active"
                                >
                                    {item.title}
                                </Link>
                            </S.NavItem>)}
                    </S.NavList>
                </nav>

                <S.IconBlock>
                    <Networks/>
                    <ChangeThemeButton onToggle={props.onToggle} isDark={props.isDark}/>
                </S.IconBlock>
            </S.MobileMenuPopUp>
        </>
    );
};