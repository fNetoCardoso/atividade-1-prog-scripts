import { Provider } from "./contexts"
import Principal from './pages/Principal';
import "@fontsource/roboto"; 

function App() {

  return (
    <Provider>
      <Principal />
    </Provider>
  );
}

export default App;