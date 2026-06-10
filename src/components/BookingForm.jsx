import { useState } from 'react'
import { IconPlus } from '../icons.jsx'

// Formulário para registrar um agendamento. Os campos são "controlados": cada
// input tem seu próprio estado e o React reflete o valor na tela. A validação é
// derivada do estado (não precisamos mexer no DOM como o validate() original):
// a descrição precisa de pelo menos 3 letras para liberar o botão.
export default function BookingForm({ selectedDay, onSave }) {
  const [day, setDay] = useState('')
  const [type, setType] = useState('maint')
  const [desc, setDesc] = useState('')
  const [saving, setSaving] = useState(false)

  const trimmed = desc.trim()
  const ok = trimmed.length >= 3

  // Mensagem e cor da dica, calculadas a partir do que foi digitado.
  let hint = { text: '', cls: 'hint' }
  if (desc.length > 0 && !ok) hint = { text: 'Descreva com pelo menos 3 letras', cls: 'hint err' }
  else if (ok) hint = { text: 'Pronto para salvar ✓', cls: 'hint ok' }

  // Salvar: mostra "Salvando..." por um instante (simulando uma gravação), avisa
  // o componente pai para registrar o agendamento e então limpa o formulário.
  const handleSave = () => {
    if (!ok) return
    setSaving(true)
    setTimeout(() => {
      // dia entre 1 e 30; se o campo estiver vazio, usa o dia selecionado no calendário
      const d = Math.min(30, Math.max(1, Number(day) || selectedDay))
      onSave(d, type, trimmed)
      setDay(''); setDesc(''); setSaving(false)
    }, 700)
  }

  return (
    <article className="card">
      <div className="card-head">
        <span className="card-ico ic-primary"><IconPlus size={22} /></span>
        <div><h3>Registrar agendamento</h3></div>
      </div>

      <div className="field">
        <label htmlFor="f-data">Dia</label>
        <input id="f-data" type="number" min="1" max="31" placeholder="ex: 20"
               value={day} onChange={(e) => setDay(e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="f-tipo">Tipo</label>
        <select id="f-tipo" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="maint">Manutenção</option>
          <option value="fuel">Abastecimento</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-desc">Descrição</label>
        <input id="f-desc" type="text" placeholder="ex: Troca de óleo"
               value={desc} onChange={(e) => setDesc(e.target.value)} />
        <div className={hint.cls}>{hint.text}</div>
      </div>

      <button className="btn-full" disabled={!ok || saving} onClick={handleSave}>
        {saving ? 'Salvando...' : 'Salvar agendamento'}
      </button>
    </article>
  )
}
