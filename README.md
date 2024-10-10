### README do Projeto: Comparar Projetos

---

## Introdução

Este projeto foi desenvolvido para comparar listas de projetos de diferentes ambientes (produção e ambiente a ser
atualizado) e identificar quais projetos estão desatualizados. A aplicação web permite que o usuário cole listas de
projetos em duas áreas de texto e, ao clicar em um botão, compara as listas e exibe os projetos desatualizados,
categorizando-os em projetos de front-end e back-end.

## Estrutura do Projeto

O projeto consiste nos seguintes arquivos:

1. **index.html**: Arquivo principal que contém a estrutura HTML da aplicação.
2. **styles.css**: Arquivo de estilos que define a aparência da aplicação.
3. **script.js**: Arquivo de script que contém a lógica de comparação dos projetos.

## Funcionalidades

### index.html

Este arquivo define a estrutura básica da página. Ele contém:

- Dois elementos `<textarea>` onde o usuário pode colar as listas de projetos.
- Um botão para iniciar a comparação.
- Um elemento `<ul>` onde os resultados serão exibidos.

### styles.css

Este arquivo contém estilos para:

- Definir a aparência geral da página, incluindo fontes, margens e cores.
- Estilizar os elementos `<textarea>`, `<button>`, `<h1>`, `<h2>`, `<ul>`, e `<li>`.
- Adicionar efeitos de hover para o botão.

### script.js

Este arquivo contém funções JavaScript para:

- **parseTxtContent**: Parseia o conteúdo das listas de projetos e cria objetos com os dados.
- **parseDate**: Converte strings de datas em objetos `Date`.
- **copyToClipboard**: Copia texto para a área de transferência.
- **marcarComoConcluido**: Marca um projeto como concluído ao clicar no item da lista.
- **compararProjetos**: Compara as listas de projetos e exibe os projetos desatualizados, categorizando-os em front-end
  e back-end.

## Como Utilizar

1. **Passo 1**: Abra o arquivo `index.html` em um navegador web.
2. **Passo 2**: Cole a lista de projetos de produção na primeira área de texto (identificada como "Cole a lista de
   projetos de prod aqui").
3. **Passo 3**: Cole a lista de projetos do ambiente a ser atualizado na segunda área de texto (identificada como "Cole
   a lista de projetos do ambiente a ser atualizado aqui").
4. **Passo 4**: Clique no botão "Comparar Projetos".
5. **Passo 5**: A lista de projetos desatualizados será exibida abaixo, separada em "Projetos de Back" e "Projetos de
   Front". Ao clicar em um projeto, ele será marcado como concluído e seu nome será copiado para a área de
   transferência.

## Exemplo de Estrutura das Listas

As listas de projetos devem seguir o seguinte formato:

```
NomeDoAmbiente
Projeto	Coluna1	Coluna2	Ultimo Deploy
Projeto1	Dado1	Dado2	2023-01-01
Projeto2	Dado1	Dado2	2023-02-01
```

## Tecnologias Utilizadas

- **HTML5**: Para a estruturação da página.
- **CSS3**: Para estilização da interface.
- **JavaScript**: Para a lógica de comparação e manipulação do DOM.

## Conclusão

Este projeto é uma ferramenta simples e eficaz para comparar listas de projetos entre diferentes ambientes e identificar
quais estão desatualizados. Ele facilita a visualização e a gestão de atualizações, tornando o processo mais organizado
e eficiente.
