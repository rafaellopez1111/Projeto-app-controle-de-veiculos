# CarControl

## Estrutura

```
index.html              # carrega as fontes e monta o React na div #root
src/
  main.jsx              # ponto de entrada (renderiza <App/>)
  index.css            # CSS original, intacto (tudo baseado em classes)
  data.js              # dados: datasets do gráfico, veículos, agendamentos
  nav.js               # NavContext: navegação global entre páginas
  icons.jsx            # ícones de linha (SVGs) como componentes
  App.jsx              # casca: sidebar/topbar + troca de página
  views/
    Inicio.jsx         # tela inicial (hero + 3 cards)
    Veiculos.jsx       # lista de veículos
    Gastos.jsx         # seletor de intervalo + gráficos
    Manutencao.jsx     # calendário + lista + formulário (guarda o estado)
  components/
    VehicleCard.jsx    # card de um veículo
    CarArt.jsx         # os dois desenhos SVG detalhados (sedan e SUV)
    ExpenseChart.jsx   # gráfico de barras (com animação de crescimento)
    DonutChart.jsx     # gráfico de rosca combustível x manutenção
    Calendar.jsx       # calendário de junho/2026 + detalhe do dia
    UpcomingList.jsx   # próximos atendimentos (derivado dos agendamentos)
    BookingForm.jsx    # formulário controlado + validação
    Toast.jsx          # notificação de confirmação
```
