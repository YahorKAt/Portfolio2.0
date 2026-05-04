import {Icon} from "../../icon/Icon.tsx";
import {Button} from "../../Button.tsx";
import {S} from "./ContactForm_Styles.ts";
import * as React from "react";

const FIELDS = [
    {id: "name", type: "text", icon: "user2", placeholder: "Your Name"},
    {id: "email", type: "email", icon: "mail_logo", placeholder: "Your Email"},
    {id: "message", type: "textarea", icon: "pen", placeholder: "Your Message"},
]

export const ContactForm: React.FC = () => {
    return (
        <S.Form>
            <S.Title>Send me a message</S.Title>
            <S.Text>Fill out the form below or <S.GradientText>email me directly.</S.GradientText></S.Text>
            {FIELDS.map((field) => {
                const isTextarea = field.type === "textarea"
                return (
                    <S.Field key={field.id} $textarea={isTextarea}>
                        <S.IconWrapper $textarea={isTextarea}>
                            <Icon iconId={field.icon} width="16px" height="16px"/>
                        </S.IconWrapper>
                        {isTextarea
                            ? <S.Textarea id={field.id} name={field.id} placeholder={field.placeholder}/>
                            : <S.Input id={field.id} name={field.id} placeholder={field.placeholder} autoComplete={field.type} type={field.type}/>
                        }
                    </S.Field>
                )
            })}
            <Button link={'#'} variant="primary" nameIcon="airplane">Send Message</Button>
            <S.HideText>
                <Icon iconId="lock" width="12px" height="12px"/>
                Your message will be sent securely
            </S.HideText>
        </S.Form>
    );
};


