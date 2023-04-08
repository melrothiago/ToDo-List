import { Header } from "./components/Index";

export interface AppProps {
  (): JSX.Element;
}

function App(): JSX.Element {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;