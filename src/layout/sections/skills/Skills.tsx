import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {Skill} from "./skill/Skill.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Skills_Styles.ts"
import {SliderSimple} from "../../../components/slider/SliderSimple.tsx";


const mySkillsArray = [
    {
        id: 1,
        name: "HTML",
        iconId: "html"
    },
    {
        id: 2,
        name: "CSS3",
        iconId: "css"
    },
    {
        id: 3,
        name: "JavaScript",
        iconId: "javascript"
    },
    {
        id: 4,
        name: "TypeScript",
        iconId: "typescript"
    },
    {
        id: 5,
        name: "React",
        iconId: "react"
    },
    {
        id: 6,
        name: "RTK",
        iconId: "redux"
    },
    {
        id: 7,
        name: "React Router",
        iconId: "react-router"
    },
    {
        id: 8,
        name: "Material UI",
        iconId: "mui"
    },
    {
        id: 9,
        name: "Tailwind",
        iconId: "tailwind"
    },
    {
        id: 10,
        name: "Git",
        iconId: "git"
    },
    {
        id: 11,
        name: "Github",
        iconId: "githubSk"
    },
    {
        id: 12,
        name: "Vite",
        iconId: "vite"
    },
];


export const Skills: React.FC = () => {
    return (
        <section id='skills'>
            <Container>
                <FlexWrapper $direction={"column"} $gap={"10px"}>
                    <SectionTitle icon="tech">My Tech Stack</SectionTitle>
                    <SectionDescription>Technologies I’ve been working with recently</SectionDescription>
                    <S.GridWrapper>
                        {mySkillsArray.map((skill) => (
                            <Skill key={skill.id} iconId={skill.iconId} skillName={skill.name}/>
                        ))}
                    </S.GridWrapper>
                    <S.Slider>
                        <SliderSimple items={mySkillsArray.map((skill) => (
                            <Skill key={skill.id}
                                   iconId={skill.iconId}
                                   skillName={skill.name}
                            />
                        ))}
                        />
                    </S.Slider>
                </FlexWrapper>
            </Container>
        </section>
    );
};