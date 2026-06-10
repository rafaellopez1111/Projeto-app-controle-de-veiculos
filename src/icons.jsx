// Coleção de ícones de linha (os mesmos SVGs do HTML original, agora como
// componentes React). Todos compartilham o mesmo "esqueleto" 24x24 com traço
// herdando a cor do texto (stroke="currentColor"), então o ícone muda de cor
// junto com o botão sem nenhum código extra — igual ao original.
//
// Observação: em JSX os atributos viram camelCase (stroke-width -> strokeWidth,
// stroke-linecap -> strokeLinecap). É a única diferença em relação ao SVG do HTML.

// Base reutilizada por todos os ícones de traço. `width` controla o tamanho e os
// `props` extras (ex.: strokeWidth) sobrescrevem os padrões quando necessário.
function Line({ size = 24, strokeWidth = 2, children, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
         strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  )
}

export const IconHome = (p) => (
  <Line {...p}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></Line>
)

export const IconCar = (p) => (
  <Line {...p}>
    <path d="M5 17h14M6.5 17l1-5.5a3 3 0 0 1 3-2.5h3a3 3 0 0 1 3 2.5l1 5.5" />
    <circle cx="7.5" cy="17.5" r="1.6" /><circle cx="16.5" cy="17.5" r="1.6" />
  </Line>
)

export const IconChartNav = (p) => (
  <Line {...p}>
    <path d="M4 19V5" /><path d="M4 19h16" />
    <rect x="7" y="11" width="3" height="6" rx="1" />
    <rect x="12" y="7" width="3" height="10" rx="1" />
    <rect x="17" y="13" width="3" height="4" rx="1" />
  </Line>
)

export const IconWrench = (p) => (
  <Line {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />
  </Line>
)

export const IconFuel = (p) => (
  <Line {...p}>
    <path d="M14 3H6a2 2 0 0 0-2 2v15h12V5a2 2 0 0 0-2-2z" />
    <path d="M16 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 1-3 0v-3h-1" />
    <path d="M7 8h5" />
  </Line>
)

export const IconCalendar = (p) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </Line>
)

export const IconArrow = (p) => (
  <Line strokeWidth={2.4} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Line>
)

export const IconInfo = (p) => (
  <Line {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" /></Line>
)

export const IconBars = (p) => (
  <Line {...p}><path d="M4 19V5M4 19h16M8 13v2M13 9v6M18 11v4" /></Line>
)

export const IconPlus = (p) => (
  <Line {...p}><path d="M12 5v14M5 12h14" /></Line>
)

export const IconCheck = (p) => (
  <Line strokeWidth={2.5} {...p}><path d="M20 6L9 17l-5-5" /></Line>
)

export const IconChevronLeft = (p) => (
  <Line strokeWidth={2.4} {...p}><path d="M15 6l-6 6 6 6" /></Line>
)

export const IconChevronRight = (p) => (
  <Line strokeWidth={2.4} {...p}><path d="M9 6l6 6-6 6" /></Line>
)
