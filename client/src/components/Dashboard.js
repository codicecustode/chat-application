import Sidebar from "./Sidebar"
import { NewContact } from './contactModel'
import { useModelShow } from '../context/ModelShowContext'
import { ContactsProvider} from '../context/ContactsProvider'
export const Dashboard = (id) => {
    const { show } = useModelShow();
    return (
        <ContactsProvider>
            <div style={{ display: "flex" }}>
                <Sidebar id={id} />

                { show && <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",         
                        height: "100vh",   
                    }}
                >
                    <NewContact />
                </div> }
            </div>
        </ContactsProvider>
    )
}