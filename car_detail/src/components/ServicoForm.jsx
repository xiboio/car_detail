export default function ServicoForm({
    planoServico, setPlanoServico,
    servico, setServico,
    observacoes, setObservacoes
}) {

    return (

        <fieldset>
            
            <legend>Serviço do Automóvel</legend>

            <div>
                <label>Plano de Serviço</label><br />
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
                <label>Descrição do Serviço</label><br />
                <textarea
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                placeholder="Ex: Lavagem técnica, polimento, higienização..."
                />
            </div>

            <div>
                <label>Observações</label><br />
                <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder="Observações adicionais"
                />
            </div>

        </fieldset>
  )
    
}