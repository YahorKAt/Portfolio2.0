import {Container} from "../../../components/Container.tsx";
import {List} from "../../../components/List.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {S} from "./Experience_Styles.ts"
import * as React from "react";

const workExperienceArray = [
    {
        jobPosition: "Junior Web Developer",
        nameCompany: "Dr. Rajkumar’s Learning App",
        location: "Belarus",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Full Time"
    },
    {
        jobPosition: "Web Development Intern",
        nameCompany: "IonPixelz Web Solutions",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    },
    {
        jobPosition: "SEO / SEM Specialist",
        nameCompany: "Dr. Rajkumar’s Learning App dvdsgfsdf",
        location: "United Kingdom of Great Britain and Northern Ireland",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    }
]
const educationExperienceArray = [
    {
        jobPosition: "Bachelor in Electronics & Communication",
        nameCompany: "Bangalore Instutute of Technology",
        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    },
    {
        jobPosition: "Bachelor in Electronics & Communication",
        nameCompany: "Bangalore Instutute of Technology",
        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    }
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
                        <List data={educationExperienceArray}/>
                    </div>
                </S.GridWrapper>
            </Container>
        </section>
    );
};

