import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import NovoAtendimento from './pages/NovoAtendimento';
import BuscarAtendimento from './pages/BuscarAtendimento';
import Icon from './components/Icon';
import './App.css';

export default function App() {
  const date = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date());
  return <BrowserRouter><div className="app-shell">
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <aside className="sidebar">
      <NavLink to="/" className="brand" aria-label="Car Detail, início"><span className="brand-mark"><Icon name="car" size={25}/></span><span>car detail<span className="brand-dot">.</span><small>GESTÃO AUTOMOTIVA</small></span></NavLink>
      <p className="nav-label">ATENDIMENTOS</p>
      <nav className="side-nav" aria-label="Navegação principal"><NavLink to="/" end><Icon name="plus"/><span>Novo atendimento</span><span className="nav-indicator"/></NavLink><NavLink to="/buscar"><Icon name="search"/><span>Buscar atendimento</span><span className="nav-indicator"/></NavLink></nav>
      <div className="sidebar-bottom"><div className="sidebar-note"><Icon name="service" size={24}/><p>Cuidado em cada detalhe.</p><span>Organize os atendimentos<br/>e foque no próximo serviço.</span></div><small>Car Detail · Área de trabalho</small></div>
    </aside>
    <div className="workspace"><header className="topbar"><span>Área de trabalho <span className="breadcrumb-slash">/</span> <strong>Atendimentos</strong></span><span className="topbar-date"><Icon name="calendar" size={16}/>{date}</span></header>
      <main id="conteudo" tabIndex={-1}><Routes><Route path="/" element={<NovoAtendimento/>}/><Route path="/buscar" element={<BuscarAtendimento/>}/><Route path="*" element={<div className="page-heading"><h1>Página não encontrada</h1><NavLink to="/">Voltar para os atendimentos</NavLink></div>}/></Routes></main>
      <footer className="app-footer"><span>Car Detail</span><span>Gestão de atendimentos de estética automotiva</span></footer>
    </div>
  </div></BrowserRouter>;
}
