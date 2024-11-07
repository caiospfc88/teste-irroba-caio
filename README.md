# Projeto Primeira Moda
Projeto desenvolvido como avaliação de conhecimentos de programação

## Conteúdo
Página inicial de um e-commerce de moda infantil e página de detalhamento e compra de produto

## Funcionalidades
- Menus de navegação pelos produtos e categorias.
- Menu de conta de usuario com simulação de entrada no sistema (menu condicional de acordo com React State).
- Carrinho de compras funcional, listando produtos já adicionados anteriormente, foi utilizado o localStorage para persistir os produtos.
- Listagem de produtos "mockados" para simular produtos cadastrados no sistema, com direcionamento para cada pagina de cproduto com opção de compra.
- Página de produto com grid de fotos cadastradas com destaque a uma foto e possibilidade de trocar a foto de destaque pelas outras cadastradas possibilitando ver a foto em tamanho maior.
- Possibilidade de selecionar a quantidade de itens do produto em tela que será adicionado ao carrinho, os itens são adicionados de forma separada no carrinho, e a possibilidade de remover itm por item do carrinho.

## Requisitos mínimos
- Node.js 18 ou superior.
- Gerenciador de pacotes como npm (já instalado com o Node.js). 

## Instalação
- Clone o repositório para a sua maquina
- Abra um terminal na pasta raiz do projeto (onde se encontra o arquivo package.json)
- Execute o comando npm install, caso ocorra um erro de compatibilidade entre dependencias, execute npm install --legacy-peer-deps
- Após concluir a instalação, execute o comando "npm run dev" para rodar a aplicação em ambiente de desenvolvimento, por padrão ele irá rodar na porta 3000 e se a porta já estiver ocupada, ele geralmente troca para a 3001, caso queira mudar manualmente a porta de execução, abra o arquivo package.json e na propriedade scripts tem dois comandos, "next dev" e "next start", para alterar a porta manulamente é só colocar a porta no comando como neste exemplo: "next dev -p 3001" "next start -p 3001", nesse exemplo a aplicação iniciara na porta 3001.

## Build
### Compilação e Minificação
- Transpila o código de JavaScript/TypeScript para uma versão mais otimizada e compatível com navegadores.
- Minifica os arquivos JavaScript, CSS e HTML, reduzindo o tamanho dos arquivos e, portanto, o tempo de carregamento.
### Renderização de Páginas Estáticas e Server-Side
- Next.js identifica quais páginas podem ser geradas estaticamente durante o build (usando getStaticProps) e cria arquivos HTML prontos para essas páginas.
- Páginas que usam getServerSideProps são configuradas para serem renderizadas no servidor em tempo de execução.
### Geração de Rotas
- No processo de build, o Next.js analisa a estrutura de rotas dentro da pasta app, identificando:
- Rotas e layouts: Páginas e layouts são configurados automaticamente com base nas pastas e arquivos. Por exemplo, uma pasta app/blog com um page.js representará a rota /blog.
- Rotas aninhadas e layouts compartilhados: A app permite a criação de layouts que podem ser aplicados a grupos de rotas específicas. Isso otimiza a renderização de conteúdo que compartilha estrutura ou visual.
- Rotas dinâmicas: As rotas dinâmicas na app podem ser criadas com colchetes (ex.: app/blog/[id]/page.js para uma página de blog dinâmica). O Next.js lida com a geração dessas rotas durante o build e aplica otimizações adequadas conforme a configuração de renderização.
### Pré-carregamento e Code Splitting
- O build faz o "code splitting" do projeto, dividindo o código em pedaços menores (chunks) que são carregados conforme necessário.
- Também gera arquivos de pré-carregamento para otimizar a navegação entre páginas, especialmente em Single Page Applications (SPA).
### Verificação de Erros e Warnings
- Durante o processo de build, o Next.js verifica o código em busca de erros e avisa sobre problemas que podem comprometer a performance ou funcionalidade do projeto.
### Executar Build
- Execute o comando "npm run build", aguarde concluir, pode demorar um pouco.

## Comando npm start
- Após concluir o comando build com sucesso, execute o comando npm start, o projeto estara disponivel pelo navegador no endereço: http://localhost:3000



