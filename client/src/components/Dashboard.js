import Sidebar from "./Sidebar"

export const Dashboard = (id) => {
    return (

        <div style={{ display: "flex" }}>
            <Sidebar id={id} />
        </div>
    )
}