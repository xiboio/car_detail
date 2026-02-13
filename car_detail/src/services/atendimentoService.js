export function obterAtendimentos() {
    const dados = localStorage.getItem("atendimentos")

    if (!dados) return []

    return JSON.parse(dados)
}

export function SalvarAtendimento(novoAtendimento) {
    const atendimentosAtuais = obterAtendimentos()

    atendimentosAtuais.push(novoAtendimento)

    localStorage.setItem(
        "atendimentos",
        JSON.stringify(atendimentosAtuais)
    )
}

const STORAGE_KEY = "atendimentos"

export function buscarAtendimento() {
    const dados = localStorage.getItem(STORAGE_KEY)

    if (!dados) return []

    try {
        return JSON.parse(dados)
    } catch {
        return []
    }

}

export function salvarAtendimentos(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista))
}