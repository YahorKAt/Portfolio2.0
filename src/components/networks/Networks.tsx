import {Network} from "./network/Network.tsx";
import styled from "styled-components";

const socialNetworksArray = [
    {
        id: 1,
        name: "github",
        ref: "https://github.com/YahorKAt"
    },
    {
        id: 2,
        name: "linkedin",
        ref: "https://www.linkedin.com/in/yahokatk/"
    },
    {
        id: 3,
        name: "telegram",
        ref: "https://t.me/yahokatk"
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

    svg {
        transition: transform 0.4s ease, color 0.4s ease;
    }

    svg:hover {
        transform: scale(1.2);
        transition: all 0.4s ease;
        color: ${({theme}) => theme.colors.hover_color};
    }
`
