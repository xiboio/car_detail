export default function ClienteForm({
    cpf,
    setCpf,
    nome,
    setNome,
    contato,
    setContato,
    email,
    setEmail
})

{
    return (
        <fieldset>
            <legend>Dados do Cliente</legend>

            <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />

            <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <input
            type="text"
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)} 
            />

            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </fieldset>
    )
}