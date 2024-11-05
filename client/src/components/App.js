import { useLocalStorage } from '../hooks/useLocalStorage';
import { Login } from "./Login"
import { Dashboard } from './Dashboard'
import { ModelShowProvider } from '../context/ModelShowContext'
function App() {
  const [id, setId] = useLocalStorage('id')

  return (
    <ModelShowProvider>
      {id ? <Dashboard id={id} /> : <Login onSubmitId={setId} />}
    </ ModelShowProvider>
  );
}

export default App;
