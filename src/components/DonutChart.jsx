import { useEffect, useState } from 'react'
import { expenseSplit } from '../data.js'

// Gráfico de rosca (donut). O truque é o mesmo do original: cada "fatia" é, na
// verdade, o contorno de um círculo com stroke-dasharray ajustado para pintar
// só a fração que lhe cabe. A segunda fatia usa stroke-dashoffset para começar
// exatamente onde a primeira terminou, encaixando uma na outra.
const R = 48
const C = 2 * Math.PI * R // circunferência -> comprimento total do anel

export default function DonutChart() {
  const { fuel, maint } = expenseSplit
  const total = fuel + maint
  const lf = C * (fuel / total)   // comprimento do arco de combustível
  const lm = C * (maint / total)  // comprimento do arco de manutenção

  // `drawn` controla a animação de "desenhar" os arcos. Começa false (dasharray
  // de comprimento 0 = nada visível) e, após um pequeno atraso, vira true e a
  // transição do CSS faz os arcos crescerem até o tamanho final.
  const [drawn, setDrawn] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setDrawn(true), 300)
    return () => clearTimeout(id)
  }, [])

  const pct = (n) => Math.round((n / total) * 100)

  return (
    <article className="card donut-card">
      <div className="donut">
        <svg viewBox="0 0 120 120">
          {/* trilho de fundo */}
          <circle cx="60" cy="60" r={R} fill="none" stroke="var(--line)" strokeWidth="16" />
          {/* arco de combustível */}
          <circle
            cx="60" cy="60" r={R} fill="none" stroke="var(--fuel)" strokeWidth="16" strokeLinecap="round"
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dasharray 1s ease' }}
            strokeDasharray={drawn ? `${lf} ${C}` : `0 ${C}`}
          />
          {/* arco de manutenção: deslocado para começar após o de combustível */}
          <circle
            cx="60" cy="60" r={R} fill="none" stroke="var(--maint)" strokeWidth="16" strokeLinecap="round"
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dasharray 1s ease' }}
            strokeDasharray={drawn ? `${lm} ${C}` : `0 ${C}`}
            strokeDashoffset={-lf}
          />
        </svg>
        <div className="center"><div className="n">R$ {total}</div><div className="l">no mês</div></div>
      </div>
      <div className="legend">
        <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: 4 }}>Divisão dos gastos</h3>
        <div className="leg">
          <span className="dot" style={{ background: 'var(--fuel)' }} />
          <span className="txt"><b>Gasolina</b><span>{pct(fuel)}% do total</span></span>
          <span className="amt">R$ {fuel}</span>
        </div>
        <div className="leg">
          <span className="dot" style={{ background: 'var(--maint)' }} />
          <span className="txt"><b>Manutenção</b><span>{pct(maint)}% do total</span></span>
          <span className="amt">R$ {maint}</span>
        </div>
      </div>
    </article>
  )
}
