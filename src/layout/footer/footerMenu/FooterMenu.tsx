import {S} from "./FooterMenu_Styles.ts";
import {NAV_ITEMS} from "../../../data/navigation.ts";
import {Link} from "react-scroll";

export const FooterMenu: React.FC = () => {
    return (
        <S.StyledFooterMenu>
            <S.NavList>
                {NAV_ITEMS.map((item) =>
                    <S.NavItem key={item.id}>
                        <Link to={item.idName}
                              smooth={true}
                              activeClass="active"
                        >
                            {item.title}
                        </Link>
                    </S.NavItem>)}
            </S.NavList>
        </S.StyledFooterMenu>
    );
};

