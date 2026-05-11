import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import {FilterBlock} from "../../../components/filter/FilterBlock.tsx";
import {Container} from "../../../components/Container.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Projects_Styles.ts"
import {DropDown} from "../../../components/sort/dropdown/DropDown.tsx";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Slider3D} from "../../../components/slider/Slider3D.tsx";
import {SliderSimple} from "../../../components/slider/SliderSimple.tsx";


const filters = [
    {title: "All Projects", status: "all", iconId: "squares"},
    {title: "HTML", status: "HTML", iconId: "html"},
    {title: "JavaScript", status: "JavaScript", iconId: "javascript"},
    {title: "SASS", status: "SASS", iconId: "sass"},
    {title: "React", status: "React", iconId: "react"},
];


const projectsData = [
    {
        id: 1,
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project1.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project1.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["JavaScript", "SASS", "React"],
        link: ["#1", "#2"],
    },
    {
        id: 2,
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project2.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project2.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "SASS", "React"],
        link: ["#1", "#2"],
    },
    {
        id: 3,
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project3.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project3.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["SASS", "React"],
        link: ["#1", "#2"],
    },
    {
        id: 4,
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project4.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project4.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["JavaScript"],
        link: ["#1", "#2"],
    },
    {
        id: 5,
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project5.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project5.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["SASS", "React"],
        link: ["#1", "#2"],
    },
    {
        id: 6,
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project6.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project6.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["JavaScript", "SASS"],
        link: ["#1", "#2"],
    }
]


export const Projects: React.FC = () => {
    const [currentFilterStatus, setcurrentFilterStatus] = useState("all");

    const filteredProjects = currentFilterStatus === "all"
        ? projectsData
        : projectsData.filter(project => project.technologies.includes(currentFilterStatus));

    function changeFilterStatus(value: string) {
        setcurrentFilterStatus(value);
    }

    return (
        <section id='projects'>
            <Container>
                <FlexWrapper $direction={"column"} $gap={"10px"}>
                    <SectionTitle icon="folder">Projects</SectionTitle>
                    <SectionDescription>Some things I`ve built</SectionDescription>
                    <S.FilterAndSortBlock>
                        <FilterBlock filterItems={filters} changeFilterStatus={changeFilterStatus}/>
                        <DropDown/>
                    </S.FilterAndSortBlock>

                    <S.Tablet>
                        <Slider3D
                            key={currentFilterStatus}
                            items={filteredProjects.map((project) =>
                                <Project key={project.id} {...project}/>)
                            }
                            cardWidth={360}
                        />
                    </S.Tablet>
                    <S.Mobile>
                        <SliderSimple
                            key={currentFilterStatus}
                            items={filteredProjects.map((project) =>
                                <Project key={project.id} {...project}/>)
                            }
                        />
                    </S.Mobile>
                    {/*<S.SliderWrapper>*/}
                    {/*    <Slider3D*/}
                    {/*        items={filteredProjects.map((project) =>*/}
                    {/*            <Project key={project.id} {...project}/>)*/}
                    {/*        }*/}
                    {/*        cardWidth={360}/>*/}
                    {/*</S.SliderWrapper>*/}
                    <S.GridWrapper>
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={project.id}
                                >
                                    <Project key={index} {...project}/>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </S.GridWrapper>
                </FlexWrapper>
            </Container>
        </section>
    )
        ;
};
