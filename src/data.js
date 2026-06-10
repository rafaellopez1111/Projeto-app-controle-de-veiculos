// Toda a "fonte de dados" do app fica concentrada aqui, separada da interface.
// No projeto original esses valores estavam espalhados pelo HTML e pelo script.js;
// juntá-los num só arquivo deixa claro o que é DADO e o que é APRESENTAÇÃO.

// Os três conjuntos do gráfico de barras (semanas, meses, anos). Cada um traz o
// título, os rótulos do eixo e os valores correspondentes (rótulo e valor andam
// em par, posição por posição).
export const datasets = {
  semanas: { title: 'Gasto por semana', labels: ['S1', 'S2', 'S3', 'S4'], values: [120, 90, 160, 130] },
  meses:   { title: 'Gasto por mês',    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], values: [420, 380, 510, 500, 470, 540] },
  ano:     { title: 'Gasto por ano',    labels: ['2021', '2022', '2023', '2024', '2025'], values: [3800, 4200, 4600, 5000, 2300] },
}

// Divisão dos gastos do mês, usada no gráfico de rosca (donut).
export const expenseSplit = { fuel: 300, maint: 200 }

// Os dois veículos exibidos na tela "Veículos".
export const vehicles = [
  { tag: 'Principal',  art: 'sedan', name: 'Honda Civic', plate: 'ABC-1234', meta: '2018 · Flex · R$ 5.000 em gastos' },
  { tag: 'Secundário', art: 'suv',   name: 'Fiat Pulse',  plate: 'DEF-5G78', meta: '2023 · Flex · R$ 1.850 em gastos' },
]

// Agendamentos iniciais do calendário (junho/2026). A chave é o dia do mês.
// No app isso vira "estado" (useState) porque o formulário pode adicionar novos.
export const initialAppointments = {
  8:  [{ t: 'Abastecimento completo', c: 'fuel' }],
  20: [{ t: 'Troca de óleo', c: 'maint' }],
  27: [{ t: 'Calibragem dos pneus', c: 'maint' }],
}

// Pequeno helper para traduzir o "tipo" técnico (fuel/maint) no rótulo mostrado.
export const typeLabel = (c) => (c === 'fuel' ? 'Abastecimento' : 'Manutenção')
