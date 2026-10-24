import Icon from './Icon';

export default function ServicoForm({ planoServico, setPlanoServico, servico, setServico, observacoes, setObservacoes }) {
  return <fieldset className="form-card"><legend><span className="section-icon"><Icon name="service" size={19}/></span>Detalhes do serviço<span className="section-number">03 / 03</span></legend>
    <div className="field-grid">
      <div className="field field-wide"><label htmlFor="plano">Plano de serviço</label><select id="plano" name="plano" value={planoServico} onChange={e=>setPlanoServico(e.target.value)}><option value="">Selecione um plano</option><option value="Básico">Básico</option><option value="Médio">Médio</option><option value="Técnico">Técnico</option></select></div>
      <div className="field field-wide"><label htmlFor="servico">Descrição do serviço <span className="required-mark">*</span></label><textarea id="servico" name="servico" required value={servico} onChange={e=>setServico(e.target.value)} placeholder="Descreva os cuidados que serão realizados no veículo..."/></div>
      <div className="field field-wide"><label htmlFor="observacoes">Observações <span className="optional-label">(opcional)</span></label><textarea id="observacoes" name="observacoes" value={observacoes} onChange={e=>setObservacoes(e.target.value)} placeholder="Condições do veículo, pedidos do cliente ou outros detalhes."/></div>
    </div>
  </fieldset>;
}
