import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.ts";

type MenuPropsType = {
    links: Array<{ title: string; id: string }>,
}

export const FooterMenu = (props: MenuPropsType) => {
    return (
        <StyledFooterMenu>
            <StyledList>
                {props.links.map((link, index) =>
                    <StyledListItem key={index}>
                        <a href={"#" + link.id}>{link.title}</a>
                    </StyledListItem>)}
            </StyledList>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
    display: flex;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const StyledList = styled.ul<{ gap?: string }>`
    display: flex;
    ${font({family: "DM Sans", weight: 500, Fmax: 18, Fmin: 16})};
    gap: 50px;
`

const StyledListItem = styled.li`
    position: relative;
    white-space: nowrap;

    &:active {
        transform: scale(0.9);
    } 
`