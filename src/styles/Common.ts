import {theme} from "./Theme.tsx";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || "400"};
    color: ${color || theme.colors.text_primary};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 320px)/(1920 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`


type GapPropsType = {
    Gmin?: number,
    Gmax?: number,
    minWidth?: number,
    maxWidth?: number,
}

export const gap = ({
                        Gmin = 0,
                        Gmax = 0,
                        minWidth = 320,
                        maxWidth = 1440
                    }: GapPropsType) => `clamp(${Gmin}px, calc(${Gmin}px + (${Gmax - Gmin} / ${maxWidth - minWidth}) * (100vw - ${minWidth}px)), ${Gmax}px)`