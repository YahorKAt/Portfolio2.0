import {Item} from "../layout/sections/aboutMe/Item.tsx";
import styled from "styled-components";
import * as React from "react";

type ItemPropsType = {
    jobPosition: string;
    nameCompany: string;
    location?: string;
    startDate: string;
    endDate?: string;
    employmentType: string;
}

type ListPropsType = {
    data: ItemPropsType[],
    showTimeline?: boolean,
}

export const List: React.FC<ListPropsType> = (props: ListPropsType) => {
    return (
        <StyledList $showTimeline={props.showTimeline}>
            {props.data.map((item, index) => (
                <Item key={index}
                      jobPosition={item.jobPosition}
                      nameCompany={item.nameCompany}
                      location={item.location || ""}
                      startDate={item.startDate}
                      endDate={item.endDate}
                      employmentType={item.employmentType}
                      showTimeline={props.showTimeline}
                />
            ))}
        </StyledList>
    );
};

const StyledList = styled.div<{ $showTimeline?: boolean }>`
    display: flex;
    flex-direction: column;
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
`
