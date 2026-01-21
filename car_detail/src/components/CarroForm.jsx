export default function CarroForm({
    carro, setCarro,
    placa, setPlaca,
    modelo, setModelo,
    ano, setAno,
    cor, setCor,
    interior, setInterior

}) {
    
    return (

        <fieldset id="dc">

            <legend>Dados do Carro</legend>

            <div>
              <label>Carro</label><br />
              <input 
              type="text"
              value={carro}
              onChange={(e) => setCarro(e.target.value)}
               />
            </div>

            <div>
              <label>Placa</label><br />
              <input 
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
               />
            </div>

            <div>
              <label>Modelo</label><br />
              <input 
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
               />
            </div>

            <div>
              <label>Ano</label><br />
              <input 
              type="number"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
               />
            </div>

            <div>
              <label>Cor</label><br />
              <input 
              type="text"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
               />
            </div>

            <div>
              <label>Interior</label><br />
              <input 
              type="text"
              value={interior}
              onChange={(e) => setInterior(e.target.value)}
               />
            </div>

          </fieldset>

    )
}