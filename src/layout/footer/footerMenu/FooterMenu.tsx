import {S} from "./FooterMenu_Styles.ts";

type MenuPropsType = {
    links: Array<{ title: string; id: string }>,
}

export const FooterMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.StyledFooterMenu>
            <S.List>
                {props.links.map((link, index) =>
                    <S.ListItem key={index}>
                        <a href={"#" + link.id}>{link.title}</a>
                    </S.ListItem>)}
            </S.List>
        </S.StyledFooterMenu>
    );
};

