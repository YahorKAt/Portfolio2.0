import {Icon} from "../icon/Icon.tsx";
import {S} from "./FilterBlock_Styles.ts";


type FiltersPropsType = {
    filterItems: Array<{ title: string, status: string, iconId: string }>,
    changeFilterStatus: (value: string) => void
}


export const FilterBlock: React.FC<FiltersPropsType> = (props: FiltersPropsType) => {
    return (
        <div role="search">
            <S.Fieldset>
                <S.Legend>Filter by technology</S.Legend>
                <S.FiltersList>
                    {props.filterItems.map(({title, status, iconId}) => (
                        <S.ListItem key={status}>
                            <S.FilterInput
                                onChange={() => {
                                    props.changeFilterStatus(status)
                                }}
                                type="radio"
                                name="filter"
                                id={status}
                                value={status}
                                defaultChecked={status === "all"}
                            />
                            <S.FilterLabel htmlFor={status}>
                                <Icon iconId={iconId} width="16px" height="16px"/>
                                {title}
                            </S.FilterLabel>
                        </S.ListItem>
                    ))}
                </S.FiltersList>
            </S.Fieldset>
        </div>
    );
};