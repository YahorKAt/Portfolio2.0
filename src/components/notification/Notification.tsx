import {S} from "./Notification_Styles.ts";
import * as React from "react"
import ReactDOM from "react-dom"

type NotificationPropsType = {
    onClose: () => void
    type?: "success" | "error"
}

export const Notification: React.FC<NotificationPropsType> = ({onClose, type = "success"}) => {
    const isSuccess = type === "success"

    return ReactDOM.createPortal(
        <S.Wrapper>
            <S.Icon $success={isSuccess}>{isSuccess ? "✓" : "✕"}</S.Icon>
            <S.Text>
                <h5>{isSuccess ? "Message Sent!" : "Something went wrong"}</h5>
                <p>{isSuccess ? "Thank you for reaching out. I'll get back to you soon." : "Please try again later."}</p>
            </S.Text>
            <S.Close onClick={onClose}>✕</S.Close>
        </S.Wrapper>,
        document.body
    )
}
