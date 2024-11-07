import { useLocalStorage } from '../hooks/useLocalStorage';
import { Login } from "./Login"
import { Dashboard } from './Dashboard'
import { ModelShowProvider } from '../context/ModelShowContext'
import { ContactsProvider} from '../context/ContactsProvider'
import { ConversationProvider } from '../context/ConversationProvider'
function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    <ContactsProvider>
      <ConversationProvider>
        <ModelShowProvider>
          {id ? <Dashboard id={id} /> : <Login onSubmitId={setId} />}
        </ ModelShowProvider>
      </ConversationProvider>
    </ContactsProvider>
  );
}

export default App;
