import { RepostiryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Form in React", 
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepostiryItem repository = {repository} />
        <RepostiryItem repository = {repository}/>
        <RepostiryItem repository = {repository}/>
        <RepostiryItem repository = {repository}/>
      </ul>
    </section>
  );
}
