import {Icon} from "../icon/Icon.tsx";
import {S} from "./FilterBlock_Styles.ts";

const filters = [
    {id: "all", label: "All Projects", iconId: "squares"},
    {id: "HTML", label: "HTML", iconId: "html"},
    {id: "JavaScript", label: "JavaScript", iconId: "javascript"},
    {id: "SASS", label: "SASS", iconId: "sass"},
    {id: "React", label: "React", iconId: "react"},
];

const sortOptions = [
    {id: "newest", label: "Newest First"},
    {id: "oldest", label: "Oldest First"},
    {id: "az", label: "A → Z"},
    {id: "za", label: "Z → A"},
];

export const FilterBlock: React.FC = () => {
    return (
        <S.StyledFilterBlock role="search">
            <S.Fieldset>
                <S.Legend>Filter by technology</S.Legend>
                <S.FiltersList>
                    {filters.map(({id, label, iconId}) => (
                        <li key={id}>
                            <S.FilterInput type="radio" name="filter" id={id} value={id} defaultChecked={id === "all"}/>
                            <S.FilterLabel htmlFor={id}>
                                <Icon iconId={iconId} width="16px" height="16px"/>
                                {label}
                            </S.FilterLabel>
                        </li>
                    ))}
                </S.FiltersList>
            </S.Fieldset>

            <S.Label htmlFor="sort">Sort by</S.Label>
            <S.Sort>
                <S.Select id="sort" aria-label="Sort projects by">
                    {sortOptions.map(({id, label}) => (
                        <option key={id} value={id}>{label}</option>
                    ))}
                </S.Select>
                <S.Chevron>
                    <Icon iconId="arrow_down" width="16px" height="16px"/>
                </S.Chevron>
            </S.Sort>
        </S.StyledFilterBlock>
    );
};