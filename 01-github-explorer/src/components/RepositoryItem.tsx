// Passando o tipo de formado que o props vai receber 
interface RepostiryItemProps { 
  repository: { 
    name: string,  
    description: string,
    html_url: string,
  }
} 

// props esta recebendo o formado passando no RepostiryItemProps
export function RepostiryItem(props: RepostiryItemProps) { 
  return ( 
    <li>

    <strong>{props.repository.name ?? "Default"}</strong>

    <p>Form in React</p>


    <a href={props.repository.html_url}>
      Acessar Repositorio
    </a>
  </li>
  )
}