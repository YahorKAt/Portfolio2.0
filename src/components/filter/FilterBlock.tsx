import {Icon} from "../icon/Icon.tsx";
import {S} from "./FilterBlock_Styles.ts";

const filters = [
    {id: "all", label: "All Projects", iconId: "squares"},
    {id: "HTML", label: "HTML", iconId: "html"},
    {id: "JavaScript", label: "JavaScript", iconId: "javascript"},
    {id: "SASS", label: "SASS", iconId: "sass"},
    {id: "React", label: "React", iconId: "react"},
];


export const FilterBlock: React.FC = () => {
    return (
        <div role="search">
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
        </div>
    );
};