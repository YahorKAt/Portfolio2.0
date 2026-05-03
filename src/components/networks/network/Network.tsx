import {Icon} from "../../icon/Icon.tsx";
import styled from "styled-components";

type NetworkProps = {
    href: string,
    iconId: string,
    ariaLabel?: string
}

export function Network(props: NetworkProps) {
    return (
        <li>
            <StyledLink href={props.href}
                        className={props.ariaLabel}
                        aria-label={`link in ${props.ariaLabel}`}
                        target="_blank"
                        rel="noreferrer">
                <Icon iconId={props.iconId}
                      width="32"
                      height="32"
                      aria-label={props.ariaLabel}
                      aria-hidden="true"/>
            </StyledLink>
        </li>
    )
}

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`