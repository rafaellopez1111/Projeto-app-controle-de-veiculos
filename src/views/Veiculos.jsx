import { vehicles } from '../data.js'
import VehicleCard from '../components/VehicleCard.jsx'

// Tela de veículos: cabeçalho + um card para cada item da lista `vehicles`.
export default function Veiculos() {
  return (
    <>
      <div className="page-head">
        <div className="eyebrow">CarControl</div>
        <h1>Veículos</h1>
        <p>Toque em um carro para ver suas informações ou gastos.</p>
      </div>
      <div className="card-grid two">
        {vehicles.map((v) => <VehicleCard key={v.plate} vehicle={v} />)}
      </div>
    </>
  )
}
