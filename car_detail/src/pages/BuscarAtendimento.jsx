import { useState } from "react"

export default function BuscarAtendimento(){

    const [placa, setPlaca] = useState("")
    const [atendimentos, setAtendmentos] = useState("")

    function buscar(){

        fetch('http://localhost:3001/atendimentos/placa${placa}')
        .then(res => res.json())
        .then(data => {
            setAtendmentos(data)
        })
        .catch(err => {
            console.error("Erro ao buscar", err)
        })
            
    }

    return(

        <div>
            <h1>Busque o veículo</h1>

            <input type="text"
            placeholder="Digite a placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            />

            
        </div>
        
    )
        
    
}