import {Container} from "../../../components/Container.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {ContactForm} from "../../../components/form/contactForm/ContactForm.tsx";
import {S} from "./Contacts_Styles.ts";
import {Bounce} from "react-awesome-reveal";


const FEATURES = [
    {id: 1, icon: "lightning", title: "Quick response", text: "I typically reply within 24 hours"},
    {id: 2, icon: "shield", title: "Your privacy matters", text: "Your information is safe with me"},
    {id: 3, icon: "done", title: "Let's build something great", text: "I'm excited to hear about your project"},
]


export const Contacts: React.FC = () => {
    return (
        <section id='contact'>
            <Container>
                <S.GridWrapper>
                    <S.RightBlock>
                        <S.HeaderBlock>
                            <S.HeaderIconWrapper>
                                <Icon iconId="emailBig" width={"64px"} height={"64px"}/>
                            </S.HeaderIconWrapper>
                            <S.HeaderTextBlock>
                                <S.GradientText>Have a questions?</S.GradientText>
                                <h4>Let's connect!</h4>
                                <p>I'm here to help. Reach out and I'll get back to you as soon as possible.</p>
                            </S.HeaderTextBlock>
                        </S.HeaderBlock>

                        <S.BottomBlock>
                            <Bounce cascade={true}>
                                {FEATURES.map((item) => (
                                    <S.Item key={item.id}>
                                        <S.IconBox>
                                            <Icon iconId={item.icon} width="20" height="20"/>
                                        </S.IconBox>
                                        <S.TextBlock>
                                            <h5>{item.title}</h5>
                                            <p>{item.text}</p>
                                        </S.TextBlock>
                                    </S.Item>
                                ))}
                            </Bounce>
                        </S.BottomBlock>
                    </S.RightBlock>
                    <S.LeftBlock>
                        <ContactForm/>
                    </S.LeftBlock>
                </S.GridWrapper>
            </Container>
        </section>
    );
};

