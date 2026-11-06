import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import {FilterBlock} from "../../../components/filter/FilterBlock.tsx";
import {Container} from "../../../components/Container.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Projects_Styles.ts"
// import {DropDown} from "../../../components/sort/dropdown/DropDown.tsx";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Slider3D} from "../../../components/slider/Slider3D.tsx";
import {SliderSimple} from "../../../components/slider/SliderSimple.tsx";


const filters = [
    {title: "All Projects", status: "all", iconId: "squares"},
    {title: "React", status: "React", iconId: "react"},
    {title: "Typescript", status: "Typescript", iconId: "typescript"},
    {title: "Redux Toolkit", status: "Redux Toolkit", iconId: "redux"},
    {title: "Material UI", status: "Material UI", iconId: "mui"},
];


const projectsData = [
    {
        id: 1,
        imageSrc: [
            new URL('../../../assets/images/project-cards/default/todolist.webp', import.meta.url).href,
            new URL('../../../assets/images/project-cards/2x/todolist_2x.webp', import.meta.url).href
        ],
        title: "TodoList",
        description: "A task management application that allows users to create, edit, delete, and organize tasks and lists. Integrated an external REST API with Bearer token authentication. Implemented drag-and-drop list sorting, theme switching, and optimistic UI updates using RTK Query.",
        technologies: ["React", "Typescript", "Redux Toolkit", "RTK Query", "Vite", "Material UI", "Rest API"],
        link: ["https://yahorkat.github.io/todolist/", "https://github.com/YahorKAt/todolist"],
    },
    {
        id: 2,
        imageSrc: [
            new URL('../../../assets/images/project-cards/default/kinopoisk.webp', import.meta.url).href,
            new URL('../../../assets/images/project-cards/2x/kinopoisk_2x.webp', import.meta.url).href
        ],
        title: "Movie App",
        description: "A movie discovery application powered by the TMDB API. Users can explore popular, recommended, upcoming, and similar movies, search for titles, apply multiple filters, and sort results. Implemented favorites with localStorage persistence, client-side routing, theme switching, pagination, and infinite scrolling.",
        technologies: ["React", "Typescript", "RTK Query", "Vite", "CSS module", "React Router", "TMDB API"],
        link: ["https://kinopoisk-xi-beige.vercel.app/", "https://github.com/YahorKAt/kinopoisk"],
    },
    {
        id: 3,
        imageSrc: [
            new URL('../../../assets/images/project-cards/default/habits.webp', import.meta.url).href,
            new URL('../../../assets/images/project-cards/2x/habits_2x.webp', import.meta.url).href
        ],
        title: "Habit Tracker",
        description: "A prototype application designed to help users track daily habits and emotional well-being. Features include a mood calendar, statistics for selected periods, and automatic cleanup of history older than seven days. The project includes both frontend and backend components.",
        technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
        link: ["https://t.me/habit_yahor_bot", "https://github.com/YahorKAt/Habits_tg"],
    },
    {
        id: 4,
        imageSrc: [
            new URL('../../../assets/images/project-cards/default/musicfun.webp', import.meta.url).href,
            new URL('../../../assets/images/project-cards/2x/musicfun_2x.webp', import.meta.url).href
        ],
        title: "Music Streaming App",
        description: "A web application focused on music streaming functionality and user authentication. Implemented an authentication flow using access and refresh tokens to manage user sessions. The project is currently under development, with the authentication system implemented and the music player functionality still in progress.",
        technologies: ["React", "Typescript", "RTK Query", "Vite", "CSS module", "Rest API"],
        link: ["#1", "https://github.com/YahorKAt/musicfun"],
    }
]


export const Projects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all");

    const filteredProjects = currentFilterStatus === "all"
        ? projectsData
        : projectsData.filter(project => project.technologies.includes(currentFilterStatus));

    function changeFilterStatus(value: string) {
        setCurrentFilterStatus(value);
    }

    return (
        <section id='projects'>
            <Container>
                <FlexWrapper $direction={"column"} $gap={"10px"}>
                    <SectionTitle icon="folder">Projects</SectionTitle>
                    <SectionDescription>Some things I`ve built</SectionDescription>
                    <S.FilterAndSortBlock>
                        <FilterBlock filterItems={filters} changeFilterStatus={changeFilterStatus}/>
                        {/*<DropDown/>*/}
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
