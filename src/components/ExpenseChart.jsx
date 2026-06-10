import { useEffect, useState } from 'react'
import { datasets } from '../data.js'

// Gráfico de barras. Recebe o intervalo selecionado (`range`) e desenha o
// conjunto correspondente de `datasets`. A altura de cada barra é proporcional
// ao maior valor, e as barras "crescem" de baixo para cima de forma escalonada.
//
// No script.js original isso era feito com requestAnimationFrame + setTimeout
// mexendo no style.height de cada barra. No React fazemos de forma declarativa:
// um estado `grown` começa em false (barras com altura 0) e vira true logo após
// a montagem; a transição do CSS faz o resto, e o atraso escalonado vem do
// transitionDelay (i * 70ms) em vez de vários setTimeout.
export default function ExpenseChart({ range }) {
  const d = datasets[range]
  const max = Math.max(...d.values)

  const [grown, setGrown] = useState(false)

  // Sempre que o intervalo muda, "zera" e recria a animação: volta para 0 e,
  // no próximo quadro, manda crescer de novo.
  useEffect(() => {
    setGrown(false)
    const id = requestAnimationFrame(() => setGrown(true))
    return () => cancelAnimationFrame(id)
  }, [range])

  return (
    <article className="card">
      <div className="card-head">
        <div><h3>{d.title}</h3><div className="sub">em Reais (R$)</div></div>
      </div>
      <div className="chart">
        {d.values.map((v, i) => {
          const isPeak = v === max
          const heightPct = Math.round((v / max) * 100)
          return (
            <div className="bar-wrap" key={d.labels[i]}>
              <div
                className={'bar' + (isPeak ? ' peak' : '')}
                // data-val vira o rótulo flutuante acima da barra (lido pelo CSS via content)
                data-val={`R$ ${v.toLocaleString('pt-BR')}`}
                // altura real só é aplicada quando `grown` é true -> dispara a transição
                style={{ height: grown ? `${heightPct}%` : 0, transitionDelay: `${i * 70}ms` }}
              />
              <span className="bar-label">{d.labels[i]}</span>
            </div>
          )
        })}
      </div>
    </article>
  )
}
