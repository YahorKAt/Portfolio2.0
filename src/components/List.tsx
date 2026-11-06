import {Item} from "../layout/sections/aboutMe/Item.tsx";
import styled from "styled-components";
import * as React from "react";

export type ExperienceItemPropsType = {
    jobPosition: string;
    nameCompany: string;
    location?: string;
    faculty?: string;          // NEW — факультет (для образования)
    startDate: string;
    endDate?: string;
    employmentType: string;
    description?: string;      // NEW — описание
    responsibilities?: string[]; // NEW — список обязанностей
}

type ListPropsType = {
    data: ExperienceItemPropsType[];
    showTimeline?: boolean;
}

export const List: React.FC<ListPropsType> = (props: ListPropsType) => {
    return (
        <StyledList $showTimeline={props.showTimeline}>
            {props.data.map((item, index) => (
                <Item key={index}
                      {...item}
                      showTimeline={props.showTimeline}
                />
            ))}
        </StyledList>
    );
};

const StyledList = styled.div<{ $showTimeline?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    padding-left: ${({$showTimeline}) => $showTimeline ? '30px' : '0'};
    margin-top: 20px;

    &::before {
        content: "";
        display: ${({$showTimeline}) => $showTimeline ? 'block' : 'none'};
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: ${({theme}) => theme.colors.gradient_primary};
    }
`;
