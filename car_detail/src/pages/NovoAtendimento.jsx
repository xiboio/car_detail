import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClienteForm from '../components/ClienteForm';
import CarroForm from '../components/CarroForm';
import ServicoForm from '../components/ServicoForm';
import Icon from '../components/Icon';
import { request } from '../services/api';

export default function NovoAtendimento() {
  const [cpf,setCpf]=useState(''), [nome,setNome]=useState(''), [contato,setContato]=useState(''), [email,setEmail]=useState('');
  const [carro,setCarro]=useState(''), [placa,setPlaca]=useState(''), [modelo,setModelo]=useState(''), [ano,setAno]=useState(''), [cor,setCor]=useState(''), [interior,setInterior]=useState('');
  const [planoServico,setPlanoServico]=useState(''), [servico,setServico]=useState(''), [observacoes,setObservacoes]=useState('');
  const [saving,setSaving]=useState(false), [feedback,setFeedback]=useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (saving) return;
    if (!nome.trim() || !servico.trim()) { setFeedback({error:true,text:'Informe o nome do cliente e a descrição do serviço.'}); return; }
    setSaving(true); setFeedback(null);
    try {
      await request('/atendimentos', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ data:new Date().toISOString().slice(0,19).replace('T',' '), cpf:cpf.replace(/\D/g,''), nome:nome.trim(), contato:contato.replace(/\D/g,''), email:email.trim(), carro, placa:placa.replace(/\s/g,'').toUpperCase(), modelo, ano, cor, interior, plano:planoServico, descricao:servico.trim(), observacoes:observacoes.trim() }) });
      setFeedback({error:false,text:'Atendimento salvo com sucesso. Tudo pronto para o próximo cuidado.'});
      [setCpf,setNome,setContato,setEmail,setCarro,setPlaca,setModelo,setAno,setCor,setInterior,setPlanoServico,setServico,setObservacoes].forEach(set=>set(''));
    } catch { setFeedback({error:true,text:'Não foi possível salvar. Verifique a conexão com o servidor e tente novamente. Seus dados continuam no formulário.'}); }
    finally { setSaving(false); }
  }
  return <>
    <div className="page-heading"><div><p className="eyebrow">UM NOVO CUIDADO COMEÇA AQUI</p><h1>Novo atendimento</h1><p>Organize os dados do cliente, do veículo e do serviço em um só lugar.</p></div><Link to="/buscar" className="button button-secondary" aria-label="Buscar atendimento"><Icon name="search" size={16}/>Buscar atendimento</Link></div>
    <div className="content-grid">
      <form onSubmit={handleSubmit} className="form-stack" aria-label="Cadastro de atendimento" aria-busy={saving}>
        <ClienteForm {...{cpf,setCpf,nome,setNome,contato,setContato,email,setEmail}}/>
        <CarroForm {...{carro,setCarro,placa,setPlaca,modelo,setModelo,ano,setAno,cor,setCor,interior,setInterior}}/>
        <ServicoForm {...{planoServico,setPlanoServico,servico,setServico,observacoes,setObservacoes}}/>
        {feedback && <div className={`status-message ${feedback.error?'error':''}`} role={feedback.error?'alert':'status'}>{feedback.text}</div>}
        <div className="form-actions"><p><Icon name="info" size={14}/> Os campos com * são obrigatórios.</p><button className="button button-primary" type="submit" disabled={saving}><Icon name="check" size={17}/>{saving?'Salvando...':'Salvar atendimento'}</button></div>
      </form>
      <aside className="summary-panel" aria-label="Resumo do atendimento"><div className="summary-header"><span>VISÃO GERAL</span><h2>Resumo do atendimento</h2></div><div className="summary-body"><div className="summary-car"><Icon name="car" size={60}/></div><div className="summary-field"><span>CLIENTE</span><strong>{nome.trim()||'Nome do cliente'}</strong></div><div className="summary-field"><span>VEÍCULO</span><strong>{[carro,modelo].filter(Boolean).join(' ')||'Veículo não informado'}</strong></div><div className="summary-field"><span>PLACA</span><strong className="plate-preview">{placa||'— — —'}</strong></div><div className="summary-field"><span>PLANO DE SERVIÇO</span><strong>{planoServico||'A definir'}</strong></div><p className="summary-note"><Icon name="info" size={13}/>Confira os dados antes de salvar o atendimento.</p></div></aside>
    </div>
  </>;
}
