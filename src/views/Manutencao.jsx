import { useState } from 'react'
import { initialAppointments } from '../data.js'
import Calendar from '../components/Calendar.jsx'
import UpcomingList from '../components/UpcomingList.jsx'
import BookingForm from '../components/BookingForm.jsx'
import Toast from '../components/Toast.jsx'

// Tela de manutenção. É aqui que mora o estado compartilhado entre o calendário,
// a lista de próximos atendimentos e o formulário:
//   - appts:     todos os agendamentos (vira a "fonte da verdade" da tela)
//   - selected:  o dia destacado no calendário
//   - toast:     a notificação de confirmação
// Calendário e lista apenas LEEM esses dados; o formulário pede uma alteração
// chamando handleSave. Esse é o padrão do React: o estado fica no ancestral
// comum e desce por props.
export default function Manutencao() {
  const [appts, setAppts] = useState(initialAppointments)
  const [selected, setSelected] = useState(20)
  const [toast, setToast] = useState({ show: false, msg: '' })

  // Mostra o toast e o esconde sozinho depois de 2,6s.
  const showToast = (msg) => {
    setToast({ show: true, msg })
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 2600)
  }

  // Registra um novo agendamento: adiciona ao dia correspondente (sem mutar o
  // estado antigo), seleciona esse dia e dispara a confirmação.
  const handleSave = (day, type, desc) => {
    setAppts((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), { t: desc, c: type }],
    }))
    setSelected(day)
    showToast('Agendamento salvo! ✓')
  }

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Agenda</div>
        <h1>Manutenção</h1>
        <p>Toque em um dia para ver os atendimentos. Os pontos coloridos indicam agendamentos.</p>
      </div>

      <div className="split">
        <Calendar appts={appts} selected={selected} onSelectDay={setSelected} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <UpcomingList appts={appts} />
          <BookingForm selectedDay={selected} onSave={handleSave} />
        </div>
      </div>

      <Toast show={toast.show} msg={toast.msg} />
    </>
  )
}
