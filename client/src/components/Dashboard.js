import Sidebar from "./Sidebar"
import { useConversation } from "../context/ConversationProvider"
import { OpenConversation } from "./OpenConversation"
export const Dashboard = (id) => {
    const { selectedConversation } = useConversation()
    return (

        <div style={{ display: "flex" }}>
            <Sidebar id={id} />
            {selectedConversation && <OpenConversation />}
        </div>
    )
}