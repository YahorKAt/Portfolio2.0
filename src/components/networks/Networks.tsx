import {Network} from "./network/Network.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

const socialNetworksArray = [
    {
        id: 1,
        name: "github",
        ref: "#"
    },
    {
        id: 2,
        name: "linkedin",
        ref: "#"
    },
    {
        id: 3,
        name: "twitter",
        ref: "#"
    }
]

export const Networks: React.FC = () => {
    return (
        <SocialNetworksBox>
            {socialNetworksArray.map(network => (
                <Network
                    key={network.id}
                    iconId={network.name}
                    href={network.ref}
                    ariaLabel={network.name}
                />
            ))}
        </SocialNetworksBox>
    )
}

const SocialNetworksBox = styled.ul`
    display: flex;
    justify-content: space-between;
    max-width: 120px;
    width: 100%;

    svg:hover {
        transform: scale(1.2);
        transition: all 0.4s ease;
        color: ${theme.colors.hover_color};
    }
`
