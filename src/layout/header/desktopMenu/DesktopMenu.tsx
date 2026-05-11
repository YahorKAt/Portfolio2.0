import {NAV_ITEMS} from "../../../data/navigation.ts";
import {S} from "./DesktopMenu_Styles.ts";


export const DesktopMenu: React.FC = () => {
    return (
        <nav>
            <S.NavList>
                {NAV_ITEMS.map((item) =>
                    <S.NavItem key={item.id}>
                        <S.NavLink to={item.idName}
                                   smooth={true}
                                   activeClass="active"
                        >
                            {item.title}
                        </S.NavLink>
                    </S.NavItem>)}
            </S.NavList>
        </nav>
    );
};