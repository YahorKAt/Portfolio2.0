import {S} from "./DesktopMenu_Styles.ts"

type MenuPropsType = {
    items: Array<{id: number, title: string; idName: string }>,
}

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
    return (
        <S.DesktopMenu>
            <ul>
                {props.items.map((item) =>
                    <S.ListItem key={item.id}>
                        <a href={"#" + item.idName}>{item.title}</a>
                    </S.ListItem>)}
            </ul>
        </S.DesktopMenu>
    );
};

