import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface AppProps {
  (): JSX.Element;
}

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;