import { useLocalStorage } from '../hooks/useLocalStorage';
import { Login } from "./Login"
import { Dashboard } from './Dashboard'
import { ModelShowProvider } from '../context/ModelShowContext'
import { ContactsProvider } from '../context/ContactsProvider'
import { ConversationProvider } from '../context/ConversationProvider'
import { SocketProvider } from '../context/SocketProvider';
function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    <SocketProvider>
      <ContactsProvider id={id}>
        <ConversationProvider id={id}>
          <ModelShowProvider>
            {id ? <Dashboard id={id} /> : <Login onSubmitId={setId} />}
          </ ModelShowProvider>
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider>

  );
}

export default App;
