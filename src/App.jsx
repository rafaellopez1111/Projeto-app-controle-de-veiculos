import { useState } from 'react'
import { NavContext, useNav } from './nav.js'
import { IconHome, IconCar, IconChartNav, IconWrench } from './icons.jsx'
import Inicio from './views/Inicio.jsx'
import Veiculos from './views/Veiculos.jsx'
import Gastos from './views/Gastos.jsx'
import Manutencao from './views/Manutencao.jsx'

// Lista única das páginas. No HTML original cada botão era escrito à mão duas
// vezes (uma na sidebar, outra na topbar); aqui descrevemos as páginas uma só vez
// e geramos os botões com map() nos dois lugares.
const PAGES = [
  { id: 'inicio',     label: 'Início',     Icon: IconHome },
  { id: 'veiculos',   label: 'Veículos',   Icon: IconCar },
  { id: 'gastos',     label: 'Gastos',     Icon: IconChartNav },
  { id: 'manutencao', label: 'Manutenção', Icon: IconWrench },
]

// Tabela que liga o id da página ao componente que a desenha. É o equivalente
// declarativo do setView() original (mostrar uma section e esconder as outras).
const VIEWS = {
  inicio: Inicio,
  veiculos: Veiculos,
  gastos: Gastos,
  manutencao: Manutencao,
}

// Botão de navegação reutilizado pela sidebar e pela topbar. Ele lê o contexto
// para saber qual página está ativa (e se destacar) e para disparar a troca.
function NavButton({ id, label, Icon, showLabel }) {
  const { view, go } = useNav()
  return (
    <button
      className={'nav-btn' + (view === id ? ' is-active' : '')}
      onClick={() => go(id)}
      aria-label={label}
    >
      <Icon size={showLabel ? 20 : 21} />
      {showLabel && ` ${label}`}
    </button>
  )
}

export default function App() {
  // O estado central do app: qual página está visível. Trocar de página é só
  // chamar setView — o React re-renderiza e mostra o componente certo.
  const [view, setView] = useState('inicio')

  // Função de navegação. Além de trocar a página, volta a rolagem para o topo,
  // exatamente como o setView original fazia com main.scrollTo.
  const go = (next) => {
    setView(next)
    document.querySelector('.main')?.scrollTo?.({ top: 0, behavior: 'smooth' })
  }

  const Active = VIEWS[view]

  return (
    // O Provider entrega { view, go } para toda a árvore de componentes abaixo.
    <NavContext.Provider value={{ view, go }}>
      <div className="shell">

        {/* Barra lateral (telas largas, >= 1024px) */}
        <aside className="sidebar">
          <div className="brand"><b>Car<span>Control</span></b></div>
          <nav className="sidenav">
            {PAGES.map((p) => <NavButton key={p.id} {...p} showLabel />)}
          </nav>
          <div className="side-foot">
            <span className="avatar">LF</span>
            <div className="who"><b>Lucas F.</b><span>2 veículos</span></div>
          </div>
        </aside>

        {/* Barra de topo (telas estreitas) */}
        <header className="topbar">
          <div className="brand"><b>Car<span>Control</span></b></div>
          <nav className="topnav">
            {PAGES.map((p) => <NavButton key={p.id} {...p} />)}
          </nav>
          <span className="avatar">LF</span>
        </header>

        {/* Área principal: renderiza apenas a página ativa. Como o componente é
            montado do zero a cada troca, a animação "rise" do CSS roda sozinha. */}
        <main className="main">
          <section className="view is-active" key={view}>
            <Active />
          </section>
        </main>

      </div>
    </NavContext.Provider>
  )
}
