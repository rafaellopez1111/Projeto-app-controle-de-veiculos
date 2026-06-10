import { IconCheck } from '../icons.jsx'

// Notificação temporária ("toast"). Ela existe sempre no DOM, escondida fora da
// tela; quando `show` é true, a classe .show desliza ela para dentro (a animação
// é toda do CSS). Quem decide quando mostrar/esconder é o componente pai.
export default function Toast({ show, msg }) {
  return (
    <div className={'toast' + (show ? ' show' : '')}>
      <IconCheck size={20} />
      <span>{msg}</span>
    </div>
  )
}
