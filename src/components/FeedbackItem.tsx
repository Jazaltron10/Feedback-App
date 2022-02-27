import styled from "styled-components"
import { Card, NumDisplay, TextDisplay } from "./styles/FeedbackItem.styles"
import { useState } from "react"

const FeedbackItem = () => {
    return (
        <Card>
            FeedbackItem
            <NumDisplay>
                10
            </NumDisplay>
            <TextDisplay>
                This is an example of a feedback item
            </TextDisplay>
        </Card>
    )
}

export default FeedbackItem





