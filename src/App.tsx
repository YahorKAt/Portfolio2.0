import styled from "styled-components"
import {Header} from "./layout/header/Header.tsx"
import {Main} from "./layout/sections/main/Main.tsx"
import {Skills} from "./layout/sections/skills/Skills.tsx"
import {Projects} from "./layout/sections/projects/Projects.tsx"
import {Contacts} from "./layout/sections/contacts/Contacts.tsx"
import {Footer} from "./layout/footer/Footer.tsx"
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {ThemeProvider} from "styled-components"
import {darkTheme, lightTheme} from "./styles/Theme.tsx";
import {useState} from "react";
import {GlobalStyles} from "./styles/GlobalStyles.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";
import {Fade} from "react-awesome-reveal";


function App() {
    const [isDark, setIsDark] = useState(true)

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <StyledApp id='home'>
                <Header onToggle={() => setIsDark(!isDark)} isDark={isDark}/>
                <main>
                    <Main/>
                    <Fade>
                        <Experience/>
                        <Skills/>
                        <Projects/>
                        <Contacts/>
                    </Fade>
                </main>
                <Footer/>
                <GoTopBtn/>
            </StyledApp>
        </ThemeProvider>

    )
}

const StyledApp = styled.div`
    background: ${({theme}) => theme.colors.bg_page};
`

export default App
