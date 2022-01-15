import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MainScreen from "./components/MainScreen";

import { GlobalProvider } from "./context/Global";

function App() {
  return (
    <GlobalProvider>
        <MainScreen/>
    </GlobalProvider>
  );
}

export default App;
