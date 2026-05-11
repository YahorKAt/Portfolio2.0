import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from "./AboutMe_Styles.ts"

type InfoItemType = {
    iconId: string;
    label: string;
    value: string;
}

const infoItems: InfoItemType[] = [
    {iconId: "user", label: "Name", value: "Egor Kotkovec"},
    {iconId: "myLocation", label: "Location", value: "Minsk, Belarus"},
    {iconId: "email", label: "Email", value: "egor.kotkovec@gmail.com"},
    {iconId: "clock", label: "Availability", value: "Open to work"},
];

export const About:React.FC = () => {
    return (
        <S.AboutBlock id="about">
            <Container>
                <S.GridWrapper>
                    <S.LeftBlock>
                        <SectionTitle icon="about">About Me</SectionTitle>
                        <S.Text>
                            <span>I'm a frontend developer based in Minsk, Belarus.</span>
                            <span>I enjoy turning complex problems into simple, beautiful and intuitive interfaces.</span>
                            <span>I love working with modern web technologies to build fast, accessible and delightful products.</span>
                        </S.Text>
                    </S.LeftBlock>

                    <S.RightBlock>
                        {infoItems.map((item) => (
                            <S.InfoItem key={item.iconId}>
                                <S.IconBox>
                                    <Icon iconId={item.iconId} width="clamp(20px, 3vw, 32px)" height="clamp(20px, 3vw, 32px)"/>
                                </S.IconBox>
                                <div>
                                    <S.Label>{item.label}</S.Label>
                                    <S.Value>{item.value.replace('@', '\u200B@')}</S.Value>
                                </div>
                            </S.InfoItem>
                        ))}
                    </S.RightBlock>
                </S.GridWrapper>
            </Container>
        </S.AboutBlock>
    );
};

