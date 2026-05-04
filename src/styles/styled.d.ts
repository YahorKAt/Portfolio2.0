import { darkTheme } from "./Theme"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: typeof darkTheme.colors,
        media: typeof darkTheme.media,
    }
}