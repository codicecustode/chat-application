import { useContacts } from '../context/ContactsProvider';
export const Contacts = () => {
    const { contacts } = useContacts();
    return (
        <div style={{ width: '100%', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ }}>
                {contacts.map(contact => (
                    <div
                        key={contact.id}
                        style={{
                            padding: '15px',
                            borderBottom: '1px solid #ddd',
                            transition: 'background-color 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#000', marginLeft:"15px" }}>{contact.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};