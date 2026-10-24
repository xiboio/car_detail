import Icon from './Icon';

export default function ClienteForm({ cpf, setCpf, nome, setNome, contato, setContato, email, setEmail }) {
  function handleCpfChange(value) { setCpf(value.replace(/\D/g, '').slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')); }
  function handleContatoChange(value) {
    let phone = value.replace(/\D/g, '').slice(0, 11);
    phone = phone.length <= 10 ? phone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3') : phone.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    setContato(phone);
  }
  return <fieldset className="form-card"><legend><span className="section-icon"><Icon name="user" size={17}/></span>Dados do cliente<span className="section-number">01 / 03</span></legend>
    <div className="field-grid">
      <div className="field"><label htmlFor="nome">Nome completo <span className="required-mark">*</span></label><input id="nome" name="nome" autoComplete="name" placeholder="Nome do cliente" required value={nome} onChange={e=>setNome(e.target.value)}/></div>
      <div className="field"><label htmlFor="cpf">CPF</label><input id="cpf" name="cpf" inputMode="numeric" placeholder="000.000.000-00" value={cpf} onChange={e=>handleCpfChange(e.target.value)}/></div>
      <div className="field"><label htmlFor="contato">Telefone</label><input id="contato" name="contato" type="tel" autoComplete="tel-national" placeholder="(00) 00000-0000" value={contato} onChange={e=>handleContatoChange(e.target.value)}/></div>
      <div className="field"><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" placeholder="cliente@email.com" value={email} onChange={e=>setEmail(e.target.value)}/></div>
    </div>
  </fieldset>;
}
