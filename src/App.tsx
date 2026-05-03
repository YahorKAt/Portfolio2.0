import styled from "styled-components"
import {Header} from "./layout/header/Header.tsx"
import {Main} from "./layout/sections/main/Main.tsx"
import {Skills} from "./layout/sections/skills/Skills.tsx"
import {Projects} from "./layout/sections/projects/Projects.tsx"
import {Contacts} from "./layout/sections/contacts/Contacts.tsx"
import {Footer} from "./layout/footer/Footer.tsx"
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {theme} from "./styles/Theme.tsx";


function App() {
    return (
        <StyledApp id='home'>
            <Header/>
            <main>
                <Main/>
                <Experience/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
            <Footer/>
        </StyledApp>
    )
}

const StyledApp = styled.div`
    background: ${theme.colors.bg_page};
`

export default App
