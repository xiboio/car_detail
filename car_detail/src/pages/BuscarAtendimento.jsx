import { useState } from "react"

export default function BuscarAtendimento(){

    const [placa, setPlaca] = useState("")
    const [atendimentos, setAtendimentos] = useState([])

    function buscar(){

        fetch(`http://localhost:3001/atendimentos/placa${placa}`)
        .then(res => res.json())
        .then(data => {
            setAtendimentos(data)
        })
        .catch(err => {
            console.error("Erro ao buscar", err)
        })
            
    }

    return(

        <div className="containerBuscar">
            <h1>Busque o veículo</h1>

            <input type="text"
            placeholder="Digite a placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            />

            <button onClick={buscar}>Buscar</button>

            <hr />

            {atendimentos.length === 0 && (
                <p>Nenhum atendimento encontrado</p>
            )}

            {atendimentos.map((a, i) => (
                
                <div key={i} className="card">

                    <p><b>Data:</b> {a.data}</p>
                    <p><b>Cpf:</b> {a.cpf}</p>
                    <p><b>Nome:</b> {a.nome}</p>
                    <p><b>Contato:</b> {a.contato}</p>
                    <p><b>Email:</b> {a.email}</p>
                    <p><b>Carro:</b> {a.carro}</p>
                    <p><b>Placa:</b> {a.placa}</p>
                    <p><b>Modelo:</b> {a.modelo}</p>
                    <p><b>Ano:</b> {a.ano}</p>
                    <p><b>Cor:</b> {a.cor}</p>
                    <p><b>Interior:</b> {a.interior}</p>
                    <p><b>Plano de Serviço:</b> {a.plano}</p>
                    <p><b>Serviço:</b> {a.descricao}</p>
                    <p><b>Observações:</b> {a.observacoes}</p>

                </div>
            ))}

        </div>
        
    )
        
    
}