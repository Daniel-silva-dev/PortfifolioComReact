import './Content.css'

export function Content( {title, text} ){
  return(
    <div class="caixa">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>

  )
}