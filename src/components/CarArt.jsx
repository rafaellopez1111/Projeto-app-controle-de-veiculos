// Os dois desenhos detalhados de carro (sedan e SUV) que aparecem nos cards de
// veículo. São SVGs "ilustrativos": usam gradiente, curvas (comando C) e várias
// formas empilhadas em ordem de pintura (corpo -> vidro -> coluna -> rodas ->
// farol). A ordem dos elementos É a profundidade — quem vem depois pinta por cima.
//
// Cada desenho usa um id de gradiente único (g1 / g2) para os dois não se
// confundirem quando renderizados na mesma página.

export function CarSedan() {
  return (
    <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f5f8" />
          <stop offset="1" stopColor="#c7cbd6" />
        </linearGradient>
      </defs>
      {/* carroceria (preenchida com o gradiente metálico) */}
      <path d="M18 92 C24 70 40 64 70 62 L100 42 C112 33 128 30 150 30 L196 30 C220 30 238 38 252 54 L286 64 C300 68 306 78 306 90 L306 96 L18 96 Z" fill="url(#g1)" stroke="#9aa0b0" strokeWidth="1.5" />
      {/* vidro / cabine */}
      <path d="M108 44 C118 36 130 34 148 34 L188 34 C206 34 220 40 230 52 L150 52 L120 52 Z" fill="#3a4156" opacity=".85" />
      {/* coluna entre os vidros + brilho do reflexo */}
      <path d="M152 34 L152 52 M118 52 L132 36" stroke="#aab" strokeWidth="1.4" opacity=".6" />
      {/* sombra/chão */}
      <rect x="14" y="90" width="296" height="8" rx="4" fill="#2b3043" />
      {/* rodas: pneu (grande) + cubo (pequeno, por cima) */}
      <circle cx="92" cy="96" r="20" fill="#1b1e29" /><circle cx="92" cy="96" r="9" fill="#4a4f63" />
      <circle cx="240" cy="96" r="20" fill="#1b1e29" /><circle cx="240" cy="96" r="9" fill="#4a4f63" />
      {/* farol */}
      <path d="M300 74 l8 2 v8 h-8 z" fill="#f3b13a" />
    </svg>
  )
}

export function CarSUV() {
  return (
    <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfd3da" />
          <stop offset="1" stopColor="#9499a5" />
        </linearGradient>
      </defs>
      <path d="M20 96 C22 72 36 64 64 62 L86 38 C96 28 110 26 128 26 L196 26 C220 26 236 34 250 52 L286 66 C300 72 304 82 304 94 L304 100 L20 100 Z" fill="url(#g2)" stroke="#7c828f" strokeWidth="1.5" />
      <path d="M96 42 C104 34 116 32 130 32 L192 32 C210 32 224 38 236 54 L130 54 L112 54 Z" fill="#33414f" opacity=".9" />
      <path d="M150 32 L150 54 M186 32 L186 54" stroke="#9fb" strokeWidth="1.2" opacity=".4" />
      <rect x="16" y="94" width="288" height="9" rx="4" fill="#2b3340" />
      <circle cx="92" cy="100" r="21" fill="#171c24" /><circle cx="92" cy="100" r="9" fill="#454c5a" />
      <circle cx="240" cy="100" r="21" fill="#171c24" /><circle cx="240" cy="100" r="9" fill="#454c5a" />
      <path d="M298 78 l8 2 v8 h-8 z" fill="#f3b13a" />
    </svg>
  )
}
