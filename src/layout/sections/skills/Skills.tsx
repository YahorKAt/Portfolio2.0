import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import {Skill} from "./skill/Skill.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Slider} from "../../../components/Slider.tsx";
import {theme} from "../../../styles/Theme.tsx";

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
        name: "React",
        iconId: "react"
    },
    {
        id: 5,
        name: "Redux",
        iconId: "redux"
    },
    {
        id: 6,
        name: "Bootstrap",
        iconId: "bootstrap"
    },
    {
        id: 7,
        name: "Tailwind",
        iconId: "tailwind"
    },
    {
        id: 8,
        name: "Sass",
        iconId: "sass"
    },
    {
        id: 9,
        name: "Git",
        iconId: "git"
    },
    {
        id: 10,
        name: "Greensock",
        iconId: "greensock"
    },
    {
        id: 11,
        name: "VS Code",
        iconId: "vscode"
    },
    {
        id: 12,
        name: "Github",
        iconId: "githubSk"
    }
];

export const Skills = () => {
    return (
        <section id='skills'>
            <Container>
                <FlexWrapper $direction={"column"} $gap={"10px"}>
                    <SectionTitle icon="tech">My Tech Stack</SectionTitle>
                    <SectionDescription>Technologies I’ve been working with recently</SectionDescription>
                    <StyledGrid>
                        {mySkillsArray.map((skill) => (
                            <Skill key={skill.id} iconId={skill.iconId} skillName={skill.name}/>
                        ))}
                    </StyledGrid>

                    <StyledSliderWrapper>
                        <Slider
                            items={mySkillsArray.map((skill) => (
                                <Skill key={skill.id} iconId={skill.iconId} skillName={skill.name} as="div"/>
                            ))}
                            cardWidth={160}
                            sceneHeight={200}
                        />
                    </StyledSliderWrapper>
                </FlexWrapper>
            </Container>
        </section>
    );
};

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    justify-content: center;
    justify-items: center;
    gap: 25px;
    margin-top: 40px;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const StyledSliderWrapper = styled.div`
    display: none;
    
    @media ${theme.media.tablet} {
        padding-top: 30px;
        display: block;
    }
`