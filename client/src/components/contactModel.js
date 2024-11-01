

export const NewContact = ({handleHide}) =>{

    const handleSubmit = (e) => {
        e.prevendefault();
        const { name, id } = e.target.elements;
        const contact = {
            name: name.value,
            id: id.value
        }
        alert(contact)
        handleHide()
    }

    return (
        <div className="new-contact" >
            <form onSubmit={ handleSubmit }>
                <h3>Create New Entry</h3>
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name" name="name" required placeholder="Enter your name" />
                </label>
                <br />
                <label htmlFor="id">
                    ID:
                    <input type="text" id="id" name="id" required placeholder="Enter your ID" />
                </label>
                <br />
                <button type="submit">Save Entry</button>
                <button type="button" onClick={handleHide}>Close</button>
            </form>
        </div>
    )

}