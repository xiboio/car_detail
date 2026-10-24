import Icon from './Icon';

export default function CarroForm({ carro, setCarro, placa, setPlaca, modelo, setModelo, ano, setAno, cor, setCor, interior, setInterior }) {
  return <fieldset className="form-card"><legend><span className="section-icon"><Icon name="car" size={18}/></span>Dados do veículo<span className="section-number">02 / 03</span></legend>
    <div className="field-grid vehicle-grid">
      <div className="field"><label htmlFor="carro">Marca / carro</label><input id="carro" name="carro" placeholder="Ex.: Volkswagen" value={carro} onChange={e=>setCarro(e.target.value)}/></div>
      <div className="field"><label htmlFor="modelo">Modelo</label><input id="modelo" name="modelo" placeholder="Ex.: Polo" value={modelo} onChange={e=>setModelo(e.target.value)}/></div>
      <div className="field"><label htmlFor="placa">Placa</label><input id="placa" name="placa" placeholder="ABC1D23" maxLength={7} autoCapitalize="characters" value={placa} onChange={e=>setPlaca(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0,7))}/></div>
      <div className="field"><label htmlFor="ano">Ano</label><input id="ano" name="ano" type="number" placeholder="Ex.: 2024" min="1900" max={new Date().getFullYear()+2} value={ano} onChange={e=>setAno(e.target.value)}/></div>
      <div className="field"><label htmlFor="cor">Cor</label><input id="cor" name="cor" placeholder="Ex.: Prata" value={cor} onChange={e=>setCor(e.target.value)}/></div>
      <div className="field"><label htmlFor="interior">Interior</label><input id="interior" name="interior" placeholder="Ex.: Couro preto" value={interior} onChange={e=>setInterior(e.target.value)}/></div>
    </div>
  </fieldset>;
}
