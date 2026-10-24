# Car Detail

Interface de cadastro e consulta de atendimentos de estética automotiva em React e Vite.

## Executar

Abra o terminal na pasta car_detail que contém package.json e execute:

npm install
npm run dev

Para gerar a versão de produção: npm run build.

## Servidor

Por padrão, a interface usa http://localhost:3001. O backend e o MySQL precisam estar configurados e em execução para salvar e consultar atendimentos.

Para usar outro servidor, copie .env.example para .env.local e ajuste VITE_API_URL. Reinicie o Vite após alterar a variável.

Rotas utilizadas:
- POST /atendimentos
- GET /atendimentos/placa/:placa

## Interface

Navegação entre cadastro e busca; formulários de cliente, veículo e serviço; resumo durante o preenchimento; layout responsivo; mensagens de sucesso, carregamento, ausência de resultados e falha. Em caso de erro ao salvar, os campos são preservados. Todos os dados do atendimento continuam disponíveis nos detalhes da busca.

Os desenhos e ícones são SVG locais. A fonte DM Sans utiliza Google Fonts, com fallback para Arial se indisponível.
