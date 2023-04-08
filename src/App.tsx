import { Header } from "./components/Header";
import { HeaderTasks } from "./components/HeaderTasks";

export interface AppProps {
  (): JSX.Element;
}

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <HeaderTasks />
    </div>
  );
}

export default App;