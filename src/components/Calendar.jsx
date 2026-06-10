import { typeLabel } from '../data.js'
import { IconCalendar, IconChevronLeft, IconChevronRight } from '../icons.jsx'

// Quantos "dias vazios" colocar antes do dia 1 para alinhar a primeira semana.
// new Date(2026, 5, 1).getDay() -> dia da semana em que junho/2026 começa
// (0 = domingo). Junho de 2026 começa numa segunda, então sobra 1 célula vazia.
const FIRST_DAY = new Date(2026, 5, 1).getDay()
const TOTAL_DAYS = 30
const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

// Calendário de junho/2026. Recebe os agendamentos, o dia selecionado e a função
// para selecionar um dia. Marca com um ponto os dias que têm agendamento e
// destaca o dia escolhido. Substitui as funções buildCalendar/showDay do original.
export default function Calendar({ appts, selected, onSelectDay }) {
  const dayAppts = appts[selected]

  return (
    <article className="card">
      <div className="cal-head">
        <div><h3>Junho</h3></div>
        <span className="yr">2026</span>
        {/* As setas são decorativas (como no original, não trocam de mês ainda) */}
        <div className="cal-nav">
          <button aria-label="anterior"><IconChevronLeft size={24} /></button>
          <button aria-label="próximo"><IconChevronRight size={24} /></button>
        </div>
      </div>

      <div className="weekdays">
        {WEEKDAYS.map((w) => <span key={w}>{w}</span>)}
      </div>

      <div className="days">
        {/* células vazias para empurrar o dia 1 até o dia da semana certo */}
        {Array.from({ length: FIRST_DAY }).map((_, i) => (
          <div className="day empty" key={`e${i}`} />
        ))}
        {/* os dias do mês */}
        {Array.from({ length: TOTAL_DAYS }).map((_, idx) => {
          const d = idx + 1
          const ap = appts[d]
          const classes = ['day']
          if (ap) { classes.push('has'); if (ap[0].c === 'fuel') classes.push('fuel') }
          if (d === selected) classes.push('sel')
          return (
            <button className={classes.join(' ')} key={d} onClick={() => onSelectDay(d)}>
              {d}
            </button>
          )
        })}
      </div>

      {/* Detalhe do dia selecionado */}
      <div className="day-detail">
        <div className="dd-date">
          <IconCalendar size={18} stroke="var(--primary)" /> {selected} de junho de 2026
        </div>
        {dayAppts ? (
          dayAppts.map((a, i) => (
            <div className={'appt' + (a.c === 'fuel' ? ' fuel' : '')} key={i}>
              <span className="pill" />
              <div className="t"><b>{a.t}</b><span>{typeLabel(a.c)} · Civic 2018</span></div>
            </div>
          ))
        ) : (
          <div className="empty-note">Nenhum atendimento neste dia.</div>
        )}
      </div>
    </article>
  )
}
