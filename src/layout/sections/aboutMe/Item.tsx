import styled, {css} from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import type {ExperienceItemPropsType} from "../../../components/List";
import {font} from "../../../styles/Common.ts";

export const Item = ({
                         jobPosition,
                         nameCompany,
                         location,
                         faculty,
                         startDate,
                         endDate,
                         employmentType,
                         description,
                         responsibilities,
                         showTimeline,
                     }: ExperienceItemPropsType & { showTimeline?: boolean }) => {
    return (
        <StyledItem $showTimeline={showTimeline}>
            <StyledTopRow>
                <StyledJobPosition>{jobPosition}</StyledJobPosition>
                <Badge $variant={employmentType}>{employmentType}</Badge>
            </StyledTopRow>

            <StyledBottomRow>
                <StyledInfo>
                    <Icon iconId={"building"} width={"12"} height={"12"} aria-hidden="true"/>
                    {nameCompany}
                </StyledInfo>

                {location && (
                    <StyledInfo>
                        <Icon iconId="location" width="12" height="12" aria-hidden="true"/>
                        {location}
                    </StyledInfo>
                )}

                {faculty && (
                    <StyledInfo>
                        <Icon iconId="book" width="12" height="12" aria-hidden="true"/>
                        {faculty}
                    </StyledInfo>
                )}

                <StyledInfo>
                    <Icon iconId={"calendar"} width={"12"} height={"12"} aria-hidden="true"/>
                    {startDate} – {endDate}
                </StyledInfo>
            </StyledBottomRow>

            {description && (
                <StyledDescription>{description}</StyledDescription>
            )}

            {responsibilities && responsibilities.length > 0 && (
                <StyledResponsibilities>
                    {responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </StyledResponsibilities>
            )}
        </StyledItem>
    );
};


const StyledItem = styled.div<{ $showTimeline?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    border-radius: 20px;
    border: ${({theme}) => theme.colors.border_color} 1px solid;
    background: ${({theme}) => theme.colors.bg_section};
    position: relative;

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
    }
`;

const StyledTopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const StyledBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 6px;
    flex-wrap: wrap;
`;

const StyledInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin: 10})};
`;

const StyledJobPosition = styled.h4`
    ${font({weight: 500, Fmax: 20, Fmin: 14})};
    margin: 0;
`;

const Badge = styled.span<{ $variant: string }>`
    ${font({Fmax: 10, Fmin: 8})};
    white-space: nowrap;
    text-align: center;
    min-width: 84px;
    border-radius: 100px;
    padding: 7px 20px;
    ${({$variant, theme}) => {
        switch ($variant) {
            case "Full Time":
                return css`
                    color: ${theme.colors.success_text};
                    background-color: ${theme.colors.success_bg};
                `;
            case "Part Time":
                return css`
                    color: ${theme.colors.warning_text};
                    background-color: ${theme.colors.warning_bg};
                `;
          
            case "Courses":
                return css`
                    color: ${theme.colors.info_text};
                    background-color: ${theme.colors.info_bg};
                `;
            default:
                return css`
                    color: ${theme.colors.success_text};
                    background-color: ${theme.colors.success_bg};
                `;
        }
    }}
`;

const StyledDescription = styled.p`
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin: 11})};
`;

const StyledResponsibilities = styled.ul`
    margin: 0;
    padding-left: 20px;
    color: ${({theme}) => theme.colors.text_secondary};
    ${font({Fmax: 14, Fmin: 11})};

    li {
        margin-bottom: 4px;
    }
`;