import {useState} from "react";
import * as React from "react";
import {Icon} from "../icon/Icon.tsx";
import {S} from "./DropDown.ts";


const sortOptions = [
    {id: "newest", label: "Newest First"},
    {id: "oldest", label: "Oldest First"},
    {id: "az", label: "A → Z"},
    {id: "za", label: "Z → A"},
];


export const DropDown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(sortOptions[0])

    return (
        <S.Sort>
            <S.SortButton onClick={() => setIsOpen(!isOpen)} aria-label="Sort projects by">
                {selected.label}
                <S.Chevron $isOpen={isOpen}>
                    <Icon iconId="arrow_down" width="16px" height="16px"/>
                </S.Chevron>
            </S.SortButton>

            {isOpen && (
                <S.StyledDropdown>
                    {sortOptions.map(({id, label}) => (
                        <S.DropdownItem
                            key={id}
                            $active={selected.id === id}
                            onClick={() => {
                                setSelected({id, label});
                                setIsOpen(false)
                            }}
                        >
                            {label}
                        </S.DropdownItem>
                    ))}
                </S.StyledDropdown>
            )}
        </S.Sort>
    )
}