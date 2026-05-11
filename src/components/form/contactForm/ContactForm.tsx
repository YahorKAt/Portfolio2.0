import {Icon} from "../../icon/Icon.tsx";
import * as React from "react";
import emailjs from '@emailjs/browser';
import {type ElementRef, useRef} from "react";
import {Notification} from "../../notification/Notification.tsx";
import {S} from "./ContactForm_Styles.ts";


const FIELDS = [
    {id: "name", type: "text", icon: "user2", placeholder: "Your Name", autoComplete: "name"},
    {id: "email", type: "email", icon: "mail_logo", placeholder: "Your Email", autoComplete: "email"},
    {id: "message", type: "textarea", icon: "pen", placeholder: "Your Message", autoComplete: "off"},
]

export const ContactForm: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const [status, setStatus] = React.useState<"default" | "sending" | "success" | "error">("default")

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) return
        setStatus("sending")

        emailjs.sendForm('service_x8l44iv', 'template_rad72x6', form.current, {publicKey: 'mgYwwHzmvtdhwju_q'})
            .then(() => {
                setStatus("success")
                form.current?.reset()
                setTimeout(() => setStatus("default"), 4000)
            })
            .catch(() => setStatus("error"))
    }

    return (
        <S.Form ref={form} onSubmit={sendEmail}>
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
                            ? <S.Textarea required id={field.id} name={field.id} placeholder={field.placeholder}/>
                            : <S.Input required id={field.id} name={field.id} placeholder={field.placeholder}
                                       autoComplete={field.autoComplete} type={field.type}/>
                        }
                    </S.Field>
                )
            })}
            <S.SubmitButton type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
                <Icon iconId="airplane" width="20" height="20"/>
            </S.SubmitButton>

            {status === "success" &&
                <Notification onClose={() => setStatus("default")}/>
            }
            {status === "error" &&
                <Notification type="error" onClose={() => setStatus("default")}/>
            }

            <S.HideText>
                <Icon iconId="lock" width="12px" height="12px"/>
                Your message will be sent securely
            </S.HideText>
        </S.Form>
    );
};


