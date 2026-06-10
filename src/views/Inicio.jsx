import { useNav } from '../nav.js'
import { IconCar, IconFuel, IconCalendar, IconArrow } from '../icons.jsx'

// Pequeno botão-link "Ver tudo" que aparece no rodapé dos cards. Ele apenas
// navega para outra página usando o contexto.
function SeeAll({ to, children }) {
  const { go } = useNav()
  return (
    <button className="see-all" onClick={() => go(to)}>
      {children} <IconArrow size={16} />
    </button>
  )
}

// Tela inicial: um hero de boas-vindas e três cards de resumo. Os números aqui
// são fixos (como no original) — servem de vitrine, não são calculados.
export default function Inicio() {
  return (
    <>
      <div className="hero">
        <div>
          <p className="hi">Bem-vindo, André!</p>
          <h2>Seus carros estão em dia</h2>
        </div>
        <div className="stats">
          <div className="stat"><div className="n">2</div><div className="l">veículos</div></div>
          <div className="stat"><div className="n">R$ 500</div><div className="l">gasto no mês</div></div>
          <div className="stat"><div className="n">2</div><div className="l">agendamentos</div></div>
        </div>
      </div>

      <div className="card-grid">
        {/* Card: meu veículo */}
        <article className="card">
          <div className="card-head">
            <span className="card-ico ic-primary"><IconCar size={22} /></span>
            <div><h3>Meu veículo</h3><div className="sub">Principal</div></div>
          </div>
          <div className="row"><span className="k">Modelo</span><span className="v">Civic 2018</span></div>
          <div className="row"><span className="k">Placa</span><span className="plate">ABC-1234</span></div>
          <div className="row"><span className="k">Gasto total</span><span className="v">R$ 5.000</span></div>
          <SeeAll to="veiculos">Ver todos os veículos</SeeAll>
        </article>

        {/* Card: gastos do mês */}
        <article className="card">
          <div className="card-head">
            <span className="card-ico ic-fuel"><IconFuel size={22} /></span>
            <div><h3>Gastos do mês</h3><div className="sub">Abril</div></div>
          </div>
          <div className="big-num">R$ 500,00 <small>total</small></div>
          <div style={{ marginTop: 12 }}>
            <div className="row"><span className="k"> Gasolina</span><span className="v">R$ 300,00</span></div>
            <div className="row"><span className="k"> Manutenção</span><span className="v">R$ 200,00</span></div>
          </div>
          <SeeAll to="gastos">Ver gastos totais</SeeAll>
        </article>

        {/* Card: próximos atendimentos */}
        <article className="card">
          <div className="card-head">
            <span className="card-ico ic-maint"><IconCalendar size={22} /></span>
            <div><h3>Próximos atendimentos</h3><div className="sub">Agenda</div></div>
          </div>
          <ul className="upcoming">
            <li><span className="when">20/04</span><span className="what"><b>Troca de óleo</b><span>Civic 2018</span></span></li>
            <li><span className="when">30/05</span><span className="what"><b>Revisão dos pneus</b><span>Civic 2018</span></span></li>
          </ul>
          <SeeAll to="manutencao">Ver agendamentos</SeeAll>
        </article>
      </div>
    </>
  )
}
