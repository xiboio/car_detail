export default function ClienteForm({
    cpf, setCpf,
    nome, setNome,
    contato, setContato,
    email, setEmail
})  {

    function handleCpfChange(value) {

    let cpfLimpo = value.replace(/\D/g, "")

    cpfLimpo = cpfLimpo.slice(0, 11)

    cpfLimpo = cpfLimpo.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    )

    setCpf(cpfLimpo)

  }

  function handleContatoChange(value) {
  let telefone = value.replace(/\D/g, "")

  telefone = telefone.slice(0, 11)

  if (telefone.length <= 10) {

    // formato fixo (11) 1234-5678
    telefone = telefone.replace(
      /(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    )

  } else {

    // formato celular (11) 91234-5678
    telefone = telefone.replace(
      /(\d{2})(\d{5})(\d{0,4})/,
      "($1) $2-$3"
    )

  }

  setContato(telefone)

}

    return (
        <fieldset>

            <legend>Dados pessoais</legend>

            <div>
                <label>CPF</label><br />
                <input
                type="text"
                value={cpf}
                onChange={(e) => handleCpfChange(e.target.value)}
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
                onChange={(e) => handleContatoChange(e.target.value)}
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