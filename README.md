# clone-tabnews-ia

Página “Em Construção” do clone do TabNews, com Next.js, App Router e JavaScript.

Consulta o total de publicações na API pública do TabNews a cada acesso e exibe
uma animação inicial com `react-confetti`, respeitando a preferência por movimento
reduzido. O conteúdo principal é enviado enquanto o contador carrega, e a biblioteca
da animação só é carregada no navegador quando ela será exibida.
A consulta exige conexão com a internet no servidor; se falhar, a página
informa que o total está temporariamente indisponível.

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

Abra http://localhost:3000 no navegador, inclusive no Windows com WSL.
Para encerrar o servidor, pressione Ctrl+C.

Para produção, execute `npm run build` e depois `npm start`.
