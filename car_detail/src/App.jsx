import { useEffect, useState } from "react"
import ClienteForm from "./components/ClienteForm"
import CarroForm from "./components/CarroForm"
import ServicoForm from "./components/ServicoForm"

import {
  buscarAtendimentos,
  SalvarAtendimento,
  salvarAtendimentos
} from "./services/atendimentoService"

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

  useEffect(() => {
    const dados = buscarAtendimentos()
    setHistoricoAtendimentos(dados)
  }, [])

  useEffect(() => {
    SalvarAtendimento(historicoAtendimentos)
  }, [historicoAtendimentos])

  function handleSubmit(e) {

    e.preventDefault()

    const cpfPadrao = cpf.replace(/\D/g, "")
    const nomePadrao = nome.trim()
    const contatoPadrao = contato.replace(/\D/g, "")
    const emailPadrao = email.trim()
    const placaPadrao = placa.replace(/\s/g, "").toUpperCase()
    const servicoPadrao = servico.trim()
    const obsPadrao = observacoes.trim()

    if (!nomePadrao) {
      alert("Informe o nome do cliente")
      return
    }

    if (!servicoPadrao) {
      alert("Descreva o serviço")
      return
    }

    const atendimento = {

      id: Date.now(),
      data: new Date().toISOString(),

      cliente: { 
        cpf :cpfPadrao,
        nome: nomePadrao,
        contato: contatoPadrao, 
        email: emailPadrao 
      },

      veiculo: { 
        carro, 
        placa: placaPadrao, 
        modelo, 
        ano, 
        cor, 
        interior
      },

      servicos: {
      plano: planoServico || null,
      descricao: servicoPadrao,
      observacoes: obsPadrao
    }
  }

  setHistoricoAtendimentos(prev => [...prev, atendimento])

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
  setPlanoServico("")
  setServico("")
  setObservacoes("")
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



