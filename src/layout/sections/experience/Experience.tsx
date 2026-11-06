import {Container} from "../../../components/Container.tsx";
import {List} from "../../../components/List.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {S} from "./Experience_Styles.ts"
import * as React from "react";

const workExperienceArray = [
    {
        jobPosition: "Junior Web Developer",
        nameCompany: "IT-Incubator",
        location: "Belarus, Minsk",
        startDate: "2026",
        endDate: "Present",
        employmentType: "Full Time",
    },
]

const educationExperienceArray = [
    {
        jobPosition: "Frontend Developer",
        nameCompany: "IT-Incubator",
        startDate: "2026",
        endDate: "2026",
        employmentType: "Courses",
        location: "Belarus, Minsk",
    },
    {
        jobPosition: "Economist-Manager",
        nameCompany: "BNTU",
        faculty: "Economics & Management in Entrepreneurship",
        startDate: "2018",
        endDate: "2020",
        employmentType: "Part Time",
        description: "Distance learning",
    },
    {
        jobPosition: "Software Engineer",
        nameCompany: "BNTU",
        faculty: "Information Technologies & Robotics",
        startDate: "2015",
        endDate: "2019",
        employmentType: "Full Time",
        description: "Higher education",
    },
]

export const Experience: React.FC = () => {
    return (
        <section>
            <Container>
                <S.GridWrapper>
                    <div>
                        <SectionTitle icon="work">Work Experience</SectionTitle>
                        <List data={workExperienceArray} showTimeline/>
                    </div>
                    <div>
                        <SectionTitle icon="education">Education</SectionTitle>
                        <List data={educationExperienceArray} showTimeline/>
                    </div>
                </S.GridWrapper>
            </Container>
        </section>
    );
};

