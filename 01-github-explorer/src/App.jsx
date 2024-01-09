//Impportando os estilos do css
import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import Global from "./style/global.scss";

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
