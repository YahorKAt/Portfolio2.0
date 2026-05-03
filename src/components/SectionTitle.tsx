import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import {font} from "../styles/Common.ts";

type SectionTitlePropsType = {
    icon?: string;
    children: React.ReactNode;
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledTitle>
            <Icon iconId={props.icon} width="35" height="35"/>
            {props.children}
        </StyledTitle>
    );
};

const StyledTitle = styled.h3`
    display: flex;
    gap: 12px;
    ${font({weight: 600, Fmax: 40, Fmin: 20})};
    align-items: center;
    text-shadow: 0 0 20px rgba(124, 92, 255, 0.5);
`
