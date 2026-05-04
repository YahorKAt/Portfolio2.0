export const media = {
    tablet: "screen and (max-width: 768px)",
    mobile: "screen and (max-width: 576px)",
}

export const commonColors = {
    default_color: "#EAEAF0",
    hover_color: "#7C5CFF",
    secondary_hover: "#00D4FF",

    // DECORATION ELEMENTS COLORS
    color_menu_hover_dot: "#7C5CFF",
    color_icon: "#9546C8",

    start_gradient: "rgba(79, 172, 254, 0.8)",
    end_gradient: "rgba(153, 70, 237, 0.8)",

    // GRADIENTS
    gradient_primary: "linear-gradient(90deg, #4facfe 0%, #8e44ad 100%)",
    gradient_btn: "linear-gradient(90deg, #4facfe, #8e44ad, #4facfe)",

    // STATUS COLORS
    success_text: "#018C0F",
    info_bg: "#DBEAFE",
    info_text: "#2563EB"
}


const darkColors = {
    // BACKGROUNDS
    bg_page: "linear-gradient(180deg, #0A0E29 0%, #000614 100%)",
    bg_section: "#0A101E",
    border_color: "#212636",
    bg_header: "#0A0E29",
    header_blur: "rgba(10, 15, 44, 0.65)",
    bg_icon: "#161C29",


    // TEXT COLORS
    text_primary: "#EAEAF0",
    text_secondary: "#838796",
    text_primary_hover: "#B9B9BB",

    success_bg: "#05261A",

}

const lightColors = {
    // BACKGROUNDS
    bg_page: "linear-gradient(180deg, #F4F7FF 0%, #E9EEFF 100%)",
    bg_section: "#FFFFFF",
    border_color: "#D6DBEA",
    bg_header: "#FFFFFF",
    header_blur: "rgba(255, 255, 255, 0.7)",
    bg_icon: "transparent",


    // TEXT COLORS
    text_primary: "#42446E",
    text_secondary: "#666666",
    text_primary_hover: "#2A3142",

    success_bg: "#D7FFE0",
}

export const darkTheme = {
    media,
    colors: {...commonColors, ...darkColors}
}

export const lightTheme = {
    media,
    colors: {...commonColors, ...lightColors}
}