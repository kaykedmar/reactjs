export function RepostiryItem(props) { 
  return ( 
    <li>

    <strong>{props.repository.name ?? "Default"}</strong>

    <p>Form in React</p>

    <a href={props.repository.link}>
      Acessar Repositorio
    </a>
  </li>
  )
}