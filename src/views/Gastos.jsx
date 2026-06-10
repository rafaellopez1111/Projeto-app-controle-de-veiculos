import { useState } from 'react'
import ExpenseChart from '../components/ExpenseChart.jsx'
import DonutChart from '../components/DonutChart.jsx'

// Opções do seletor de intervalo (o "segmented control").
const RANGES = [
  { id: 'semanas', label: 'Semanas' },
  { id: 'meses', label: 'Meses' },
  { id: 'ano', label: 'Anos' },
]

// Tela de gastos: o seletor de intervalo controla qual conjunto o gráfico de
// barras mostra. `currentRange` é o estado local; trocá-lo redesenha o gráfico
// (e dispara a animação de novo). Substitui o currentRange global do script.js.
export default function Gastos() {
  const [currentRange, setCurrentRange] = useState('meses')

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Civic 2018</div>
        <h1>Gastos totais</h1>
        <p>Acompanhe quanto seu veículo consome ao longo do tempo.</p>
      </div>

      <div className="seg">
        {RANGES.map((r) => (
          <button
            key={r.id}
            className={currentRange === r.id ? 'is-active' : ''}
            onClick={() => setCurrentRange(r.id)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="split">
        {/* key={currentRange} remonta o gráfico ao trocar de intervalo, então a
            animação de crescimento recomeça do zero sem "pular". */}
        <ExpenseChart key={currentRange} range={currentRange} />
        <DonutChart />
      </div>
    </>
  )
}
