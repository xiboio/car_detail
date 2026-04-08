import { useState } from "react"
import ClienteForm from "../components/ClienteForm"
import CarroForm from "../components/CarroForm"
import ServicoForm from "../components/ServicoForm"

    
    export default function NovoAtendimento() {
     
    
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
    
        console.log("Enviando dados!")
    
        fetch("http://localhost:3001/atendimentos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data: new Date().toISOString().slice(0, 19).replace("T", " "),
            cpf: cpfPadrao,
            nome: nomePadrao,
            contato: contatoPadrao,
            email: emailPadrao,
            carro,
            placa: placaPadrao,
            modelo,
            ano,
            cor,
            interior,
            plano: planoServico,
            descricao: servicoPadrao,
            observacoes: obsPadrao
          })
        })
        .then(res => res.text())
        .then(msg => {
          alert(msg)
    
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
    
        })
        .catch(err => {
          console.error("Erro:", err)
        })
    
      }
  
      return (
        <>
        <div className="containerSalvar">
          <div className="title">
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
    
              <button type="submit" className="btnsave">Salvar</button>
    
          </form>

        </div>
        </>
    
        
      )
    }
    