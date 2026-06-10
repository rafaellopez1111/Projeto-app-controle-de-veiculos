import { createContext, useContext } from 'react'

// No HTML original a navegação era feita por um atributo data-nav lido por um
// único event listener global. Aqui usamos um "Context" do React: o App guarda
// qual página está ativa e disponibiliza a função `go(pagina)` para QUALQUER
// componente, por mais fundo que ele esteja, sem precisar passar a função de mão
// em mão por todos os níveis. É o substituto direto do data-nav.
export const NavContext = createContext({ view: 'inicio', go: () => {} })

// Atalho para os componentes consumirem o contexto: const { view, go } = useNav()
export const useNav = () => useContext(NavContext)
