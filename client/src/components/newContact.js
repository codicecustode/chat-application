

export const NewContact = ({handleHide}) =>{

    return (
        <div className="new-contact">
            <form onsubmit="handleSubmit(event)">
                <h3>Create New Entry</h3>
                <label for="name">
                    Name:
                    <input type="text" id="name" name="name" required placeholder="Enter your name" />
                </label>
                <br />
                <label for="id">
                    ID:
                    <input type="text" id="id" name="id" required placeholder="Enter your ID" />
                </label>
                <br />
                <button type="submit">Save Entry</button>
                <button type="button" onclick={handleHide}>Close</button>
            </form>
        </div>
    )

}