import React, { useState } from "react"
import Sidebar from "./Sidebar"
import { useConversation } from "../context/ConversationProvider"
import { OpenConversation } from "./OpenConversation"
export const Dashboard = (id) => {
    const [showConversation, setShowConversation] = useState(true);

    const { selectedConversation } = useConversation()
    return (

        <div style={{ display: "flex" }}>
            <Sidebar id={id} setShowConversation={setShowConversation} />
            {selectedConversation && showConversation && <OpenConversation />}
        </div>
    )
}