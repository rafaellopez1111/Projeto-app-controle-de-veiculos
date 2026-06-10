import { typeLabel } from '../data.js'
import { IconCalendar } from '../icons.jsx'

// Lista de próximos atendimentos. Pega todos os dias com agendamento, ordena
// por data e mostra cada um. Como deriva direto de `appts`, ela se atualiza
// sozinha quando um novo agendamento é salvo. (No original era a renderUpcoming.)
export default function UpcomingList({ appts }) {
  const list = Object.keys(appts)
    .map((d) => ({ d: Number(d), ...appts[d][0] }))
    .sort((a, b) => a.d - b.d)

  return (
    <article className="card">
      <div className="card-head">
        <span className="card-ico ic-maint"><IconCalendar size={22} /></span>
        <div><h3>Próximos atendimentos</h3></div>
      </div>
      <ul className="upcoming">
        {list.map((a) => (
          <li key={a.d}>
            <span className="when">{String(a.d).padStart(2, '0')}/06</span>
            <span className="what"><b>{a.t}</b><span>{typeLabel(a.c)}</span></span>
          </li>
        ))}
      </ul>
    </article>
  )
}
