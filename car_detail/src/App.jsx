import { useState } from "react"

function App() {
 

  // dados do cliente
  const [cpf, setCpf] = useState("")
  const [nome, setNome] = useState("")
  const [contato, setContato] = useState("")
  const [email, setEmail] = useState("")

  //dados do carro
  const [carro, setCarro] = useState("")
  const [placa, setPlaca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState("")
  const [cor, setCor] = useState("")
  const [interior, setInterior] = useState("")

  // serviço
  const [planoServico, setPlanoServico] = useState("")
  const [servico, setServico] = useState("") 
  const [observacoes, setObservacoes] = useState("")
  const [historicoServicos, setHistoricoServicos] = useState([])
  const [historicoAtendimentos, setHistoricoAtendimentos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (historicoServicos.length === 0){
      alert("Adicione pelo menos um serviço")
      return
    }

    const atendimento = {
    id: Date.now(),
    data: new Date().toLocaleDateString(),
    cliente: {
      cpf,
      nome,
      contato,
      email
    },
    carro: {
      carro,
      placa,
      modelo,
      ano,
      cor,
      interior
    },
    servicos: {
      plano: planoServico || null,
      descricao: servico, observacoes
    }
  }

  setHistoricoAtendimentos([
    ...historicoAtendimentos,
    atendimento
  ])

  alert("Atendimento salvo com sucesso")

  // limpa formulário
  setCpf("")
  setNome("")
  setContato("")
  setEmail("")
  setCarro("")
  setPlaca("")
  setModelo("")
  setAno("")
  setCor("")
  setInterior("")
  setHistoricoServicos([])
}

  return (
    <>

      <div>
          <h1>Car Detail</h1>
      </div>

      <form onSubmit={handleSubmit}>

          
          <fieldset id="dp">

            <legend>Dados pessoais</legend>

            <div>
              <label>Cpf</label><br />
              <input 
              type="number"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            </div>

            <div>
              <label>Nome</label><br />
              <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)} />
            </div>

            <div>
              <label>Contato</label><br />
              <input 
              type="text"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              />
            </div>

            <div>
              <label>E-mail</label><br />
              <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>

          </fieldset>

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

          <fieldset id="sa">

            <legend>Serviços do Automóvel</legend>

            <label>Plano de Serviço</label>
              <div>
                
                <select
                value={planoServico}
                onChange={(e) => setPlanoServico(e.target.value)}
                >
                  
                  <option value="">Nenhum</option>
                  <option value="Básico">Básico</option>
                  <option value="Médio">Médio</option>
                  <option value="Técnico">Técnico</option>

                </select>

              </div>

              <div>
                <label>Serviço</label><br />
                <textarea
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                />
              </div>

              <div>
                <label>Observações</label><br />
                <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                />
              </div>

              <ul>
                {historicoServicos.map((s, index) => (
                  <li key={index}>
                    <strong>{s.servico}</strong> - {s.data}
                    {s.plano && <p>Plano: {s.plano}</p>}
                    {s.observacoes && <p>Obs: {s.observacoes}</p>}
                  </li>
                ))}
              </ul>

          </fieldset>

          <button type="submit">Salvar</button>

      </form>
    </>

    
  )
}

export default App

