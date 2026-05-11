import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {font} from "../../../styles/Common.ts";

type ExperienceItemPropsType = {
    jobPosition: string,
    nameCompany: string,
    location: string,
    startDate: string,
    endDate?: string,
    employmentType: string,
    showTimeline?: boolean,
}

export const Item = ({
                         jobPosition,
                         nameCompany,
                         location,
                         startDate,
                         endDate,
                         employmentType,
                         showTimeline
                     }: ExperienceItemPropsType) => {
    return (
        <StyledItem $showTimeline={showTimeline}>
            <StyledTopRow>
                <StyledJobPosition>{jobPosition}</StyledJobPosition>
                <Badge>{employmentType}</Badge>
            </StyledTopRow>

            <StyledBottomRow>
                <StyledInfo>
                    <Icon iconId={"building"}
                          width={"12"}
                          height={"12"}
                          aria-hidden="true"/>
                    {nameCompany}
                </StyledInfo>

                <StyledInfo>
                    {location ? (
                        <>
                            <Icon iconId="location"
                                  width="12"
                                  height="12"
                                  aria-hidden="true"/>
                            {location}
                        </>
                    ) : null}
                </StyledInfo>

                <StyledInfo>
                    <Icon iconId={"calendar"}
                          width={"12"}
                          height={"12"}
                          aria-hidden="true"/>
                    {startDate} - {endDate}
                </StyledInfo>
            </StyledBottomRow>
        </StyledItem>
    );
};

const StyledItem = styled.div<{ $showTimeline?: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_section};

    position: relative;
    margin-bottom: 30px;

    &::before {
        content: "";
        display: ${({$showTimeline}) => $showTimeline ? 'block' : 'none'};
        position: absolute;
        left: -20px;
        top: 26px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.color_menu_hover_dot};
`

const StyledTopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    
`

const StyledInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin:10})}
 
`

const StyledBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
`

const StyledJobPosition = styled.h4`
    ${font({weight: 500, Fmax: 20, Fmin:14 })}
`

const Badge = styled.span`
    color: ${({theme}) => theme.colors.success_text};
    ${font({ Fmax: 10, Fmin: 8})}
    white-space: nowrap;
    text-align: center;
    min-width: 84px;
    border-radius: 100px;
    padding: 7px 20px;
    background-color: ${({theme}) => theme.colors.success_bg};
`