import { useLocalStorage } from '../hooks/useLocalStorage';
import { Login } from "./Login"
function App() {
  const [id, setId] = useLocalStorage()

  return (
    <>
      {id}
      <Login onSubmitId={setId}/>
    </>
  );
}

export default App;
