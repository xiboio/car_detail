import { useState } from "react"
import ClienteForm from "./components/ClienteForm"
import CarroForm from "./components/CarroForm"
import ServicoForm from "./components/ServicoForm"

export default function App() {
 

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
  const [historicoAtendimentos, setHistoricoAtendimentos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

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

        <ClienteForm
        
          cpf={cpf}
          setCpf={setCpf}
          nome={nome}
          setNome={setNome}
          contato={contato}
          setContato={setContato}
          email={email}
          setEmail={setEmail}

        />

        <CarroForm

          carro={carro}
          setCarro={setCarro}
          placa={placa}
          setPlaca={setPlaca}
          modelo={modelo}
          setModelo={setModelo}
          ano={ano}
          setAno={setAno}
          cor={cor}
          setCor={setCor}
          interior={interior}
          setInterior={setInterior}

        />

        <ServicoForm

          planoServico={planoServico}
          setPlanoServico={setPlanoServico}
          servico={servico}
          setServico={setServico}
          observacoes={observacoes}
          setObservacoes={setObservacoes}

        />

          <button type="submit">Salvar</button>

      </form>
    </>

    
  )
}



