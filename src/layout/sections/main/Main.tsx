import photo from "../../../assets/images/photo/photo.webp"
import photo2x from "../../../assets/images/photo/photo2x.webp"
import {Container} from "../../../components/Container.tsx";
import {Button} from "../../../components/Button.tsx";
import {About} from "../aboutMe/AboutMe.tsx";
import {S} from "./Main_Styles.ts";

export const Main: React.FC = () => {
    return (
        <S.Section>
            <Container>
                <S.GridWrapper>
                    <S.Title>
                        <span aria-hidden="true">Hi 👋, I'm</span>
                        <S.GradientText>Egor Kotkovets</S.GradientText>
                        <span>l build things for web</span>
                    </S.Title>

                    <S.Text>Frontend Developer who loves crafting beautiful, responsive
                        and performant web experiences.
                    </S.Text>

                    <S.PhotoWrapper>
                        <S.Glow/>
                        <S.Photo src={photo}
                                 srcSet={`${photo2x} 2x`}
                                 alt="photo"
                                 fetchPriority="high"
                                 loading="eager"
                                 decoding="sync"/>
                    </S.PhotoWrapper>

                    <S.ButtonsBlock>
                        <Button link={'projects'} variant="primary" nameIcon="arrow">View My Work</Button>
                        <Button variant="outlined" nameIcon="download">Download CV</Button>
                    </S.ButtonsBlock>
                </S.GridWrapper>
            </ Container>
            <About/>
        </S.Section>
    );
};

