import { useNav } from '../nav.js'
import { CarSedan, CarSUV } from './CarArt.jsx'
import { IconInfo, IconBars } from '../icons.jsx'

// Card de um veículo (foto/desenho + dados + dois botões). Recebe o objeto do
// veículo por props e escolhe o desenho certo conforme o campo `art`.
export default function VehicleCard({ vehicle }) {
  const { go } = useNav()
  const Art = vehicle.art === 'suv' ? CarSUV : CarSedan

  return (
    <article className="card vehicle">
      <div className={'photo' + (vehicle.art === 'suv' ? ' suv' : '')}>
        <span className="tag">{vehicle.tag}</span>
        <Art />
      </div>
      <div className="body">
        <div className="top"><h3>{vehicle.name}</h3><span className="plate">{vehicle.plate}</span></div>
        <div className="meta">{vehicle.meta}</div>
        <div className="vbtns">
          <button className="btn btn-soft" onClick={() => go('veiculos')}>
            <IconInfo size={17} /> Informações
          </button>
          <button className="btn btn-primary" onClick={() => go('gastos')}>
            <IconBars size={17} /> Gastos
          </button>
        </div>
      </div>
    </article>
  )
}
