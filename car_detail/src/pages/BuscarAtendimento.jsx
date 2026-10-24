import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { request } from '../services/api';

const fields = [['Data','data'],['CPF','cpf'],['Nome','nome'],['Telefone','contato'],['E-mail','email'],['Carro','carro'],['Placa','placa'],['Modelo','modelo'],['Ano','ano'],['Cor','cor'],['Interior','interior'],['Plano de serviço','plano'],['Serviço','descricao'],['Observações','observacoes']];
function formatDate(value) { if (!value) return 'Data não informada'; const d=new Date(String(value).replace(' ','T')); return Number.isNaN(d.getTime())?value:new Intl.DateTimeFormat('pt-BR').format(d); }

export default function BuscarAtendimento() {
  const [placa,setPlaca]=useState(''), [atendimentos,setAtendimentos]=useState([]), [loading,setLoading]=useState(false), [searched,setSearched]=useState(false), [error,setError]=useState(''), [lastPlate,setLastPlate]=useState('');
  const requestId=useRef(0);
  async function buscar(e) {
    e.preventDefault();
    const normalized=placa.replace(/[^a-z0-9]/gi,'').toUpperCase();
    if (!normalized) { setError('Informe a placa do veículo para buscar.'); return; }
    const id=++requestId.current;
    setLoading(true);setError('');setAtendimentos([]);setSearched(false);setLastPlate(normalized);
    try {
      const response=await request(`/atendimentos/placa/${encodeURIComponent(normalized)}`);
      const data=await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid response');
      if(id!==requestId.current)return;
      setAtendimentos(data);setSearched(true);
    } catch { if(id===requestId.current)setError('Não foi possível consultar os atendimentos. Verifique a conexão com o servidor e tente novamente.'); }
    finally { if(id===requestId.current)setLoading(false); }
  }
  return <div className="search-layout">
    <div className="page-heading"><div><p className="eyebrow">CADA VEÍCULO TEM SUA HISTÓRIA</p><h1>Buscar atendimento</h1><p>Encontre os serviços registrados para um veículo pela placa.</p></div><Link className="button button-secondary" to="/" aria-label="Novo atendimento"><Icon name="plus" size={17}/>Novo atendimento</Link></div>
    <section className="search-card" aria-labelledby="search-title"><div className="search-intro"><span className="section-icon"><Icon name="search" size={18}/></span><div><h2 id="search-title">Consulta por placa</h2><p>Informe a placa cadastrada para encontrar os atendimentos.</p></div></div><form className="search-form" onSubmit={buscar}><div><label htmlFor="buscar-placa">Placa do veículo</label><input className="search-input" id="buscar-placa" placeholder="ABC1D23" maxLength={7} autoCapitalize="characters" value={placa} onChange={e=>setPlaca(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,7))}/></div><button type="submit" className="button button-primary" disabled={loading}><Icon name="search" size={17}/>{loading?'Buscando...':'Buscar atendimento'}</button></form></section>
    {error&&<p className="status-message error" role="alert">{error}</p>}
    <div aria-live="polite" aria-busy={loading}>
      {loading&&<div className="empty-state"><span className="empty-icon"><Icon name="search" size={25}/></span><h2>Buscando atendimentos...</h2><p>Aguarde um instante enquanto consultamos o veículo.</p></div>}
      {!loading&&!error&&atendimentos.length===0&&<div className="empty-state"><span className="empty-icon"><Icon name={searched?'car':'search'} size={26}/></span><h2>{searched?'Nenhum atendimento encontrado':'Encontre o próximo detalhe'}</h2><p>{searched?`Não há atendimentos registrados para a placa ${lastPlate}. Confira a placa ou cadastre um novo atendimento.`:'O histórico do veículo aparecerá aqui. Comece informando uma placa no campo acima.'}</p></div>}
      {!loading&&atendimentos.length>0&&<><h2 className="results-heading">{atendimentos.length} {atendimentos.length===1?'atendimento encontrado':'atendimentos encontrados'} · {lastPlate}</h2>{atendimentos.map((a,i)=><article className="result-card" key={a.id??i}><div className="result-heading"><div><h2>{a.nome||'Cliente não informado'}</h2><p>{[a.carro,a.modelo].filter(Boolean).join(' ')||'Veículo'} · {formatDate(a.data)}</p></div><span className="plate-badge">{a.placa||lastPlate}</span></div><p className="result-description">{a.descricao||'Serviço sem descrição.'}</p><details><summary>Ver todos os detalhes</summary><dl className="details-grid">{fields.map(([label,key])=><div key={key}><dt>{label}</dt><dd>{key==='data'?formatDate(a[key]):String(a[key]??'').trim()||'Não informado'}</dd></div>)}</dl></details></article>)}</>}
    </div>
  </div>;
}
