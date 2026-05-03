import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import {FilterBlock} from "../../../components/filter/FilterBlock.tsx";
import {Slider} from "../../../components/Slider.tsx";
import {Container} from "../../../components/Container.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import {S} from "./Projects_Styles.ts"

const projects = [
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project1.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project1.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project2.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project2.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project3.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project3.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project4.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project4.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project5.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project5.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project6.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project6.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    }
]

export const Projects:React.FC = () => {
    return (
        <section id='projects'>
            <Container>
                <FlexWrapper $direction={"column"} $gap={"10px"}>
                    <SectionTitle icon="folder">Projects</SectionTitle>
                    <SectionDescription>Some things I`ve built</SectionDescription>
                    <FilterBlock/>
                    <S.SliderWrapper>
                        <Slider
                            items={projects.map((project, index) => (
                                <Project key={index} {...project}/>
                            ))}
                            cardWidth={360}
                        />
                    </S.SliderWrapper>
                    <S.GridWrapper>
                        {projects.map((project, index) => (
                            <Project key={index} {...project}/>
                        ))}
                    </S.GridWrapper>
                </FlexWrapper>
            </Container>
        </section>
    );
};

