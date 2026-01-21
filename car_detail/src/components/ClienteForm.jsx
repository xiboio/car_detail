export default function ClienteForm({
    cpf, setCpf,
    nome, setNome,
    contato, setContato,
    email, setEmail
})  {

    return (
        <fieldset>

            <legend>Dados pessoais</legend>

            <div>
                <label>CPF</label><br />
                <input
                type="number"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                />
            </div>

            <div>
                <label>Nome</label><br />
                <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div>
                <label>Contato</label><br />
                <input
                type="text"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                />
            </div>

            <div>
                <label>E-mail</label><br />
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

        </fieldset>
    )
}