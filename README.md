<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#requerimentos">Requerimentos</a> •
 <a href="#primeiros-passos">Primeiros passos</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#decisoes-de-design">Decisões de design</a> •
 <a href="#preview">Preview</a> •
 <a href="#author">Autor</a>
</p>

## Sobre

Desafio técnico para concorrer a vaga Frontend na empresa Me Salva!

## Requerimentos

É necessário ter o [node](https://nodejs.org/en/) na versão 16 ou superior. Para verificar digite no terminal:

```bash
node -v
```

## Primeiros passos

1. Clone o repositório em um diretório do seu computador executando o comando abaixo:
```bash
https://github.com/paulocjota/desafio-tecnico.git
```

2. Instale as depêndencias necessárias do projeto:
```bash
npm install
```

3. Rodando o projeto:

build de desenvolvimento. Ao alterar o código cada mudança ocorre atualizando a página porém a experiência de navegação é lenta:

```bash
npm run dev
```
OU<br><br>
build de produção. Ao alterar o código cada mudança se torna necessário buildar novamente através do comando <b>npm run build</b> porém a experiência de navegação é otimizada:

```bash
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o resultado.

## Tecnologias

O projeto foi feito utilizando o framework [Next.js](https://nextjs.org/). Esta decisão se deve ao fato de que o framework citado permite a geração de páginas estáticas em tempo de build com informações recuperadas da API Backend. De todos os benefícios os que se destacam são:
* Redução de requisições ao banco de dados: Com a geração de páginas estáticas, quando um usuário acessa a página em vez de ocorrer uma (ou mais) requisições ao banco de dados para retornar as respectivas informações é fornecida uma página estática.
* Redução no tempo de respostas: Como uma página estática é requisitada não há processamento de dados no backend (queries de banco de dados e etc...) o que diminui significativamente o tempo de resposta.

* Otimização para os motores de busca: Em uma aplicação JavaScript tradicional como por exemplo utilizando React as informações relevantes para os motores de busca como o título da página e meta description só são geradas em tempo de execução do lado cliente, ou seja, no browser do usuário. Como os motores de busca leem apenas o conteúdo HTML e não interpretam JavaScript é como se as informações relevantes para o motor de busca não existissem. O Next.js resolve esse problema pois ele gera páginas estáticas já com todas as informações necessárias no momento da build.

### Depêndencias

[heroicons](https://github.com/tailwindlabs/heroicons): Icones em formato SVG utilizados na aplicação

[axios](https://axios-http.com/ptbr/docs/intro): Cliente HTTP para efetuar requisições para a API

[DOMPurify](https://github.com/cure53/DOMPurify): Sanitizador de string HTML para evitar ataques XSS

## Decisões de design

### Organização de arquivos dos componentes
Foi criado um diretório com nome do componente, dentro arquivo <b>index.js</b> com o código do componente e um arquivo <b>styles.module.css</b> referente aos estilos do componente. Ex.:<br><br>
MyComponent/index.js<br>
MyComponent/styles.module.css<br><br>

Para componentes mais complexos foram criados componentes filhos seguindo o mesmo padrão e imbuídos ao componente pai.

Componentes que são ou podem ser utlizados em diversos contextos foram colocados dentro do diretório <b>common</b>.
<br><br>
### Nomenclatura de classes CSS

camelCase, de maneira simplificada já que o próprio Next.js permite a criação de arquivos de estilo com o prefixo module trazendo o benefício de que as classes de um componente não colidam com as de outro mesmo que tenham o mesmo nome.

### Funções e classes JavaScript

Funções e classes JavaScript foram colocadas dentro do diretório <b>utils</b> e importadas no componente quando necessário.


## Preview

Acesse o projeto hospedado em um servidor online clicando [aqui](https://localhost:3000)!

## Autor
[paulocjota](https://github.com/paulocjota)