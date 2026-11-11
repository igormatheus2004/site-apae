# Guia da Atividade: Construção do Site da APAE

Este guia foi preparado para ajudar você a preencher os textos e colocar as fotos no site da APAE de forma simples e organizada usando o VSCode.

---

## Onde Guardar as Imagens

1. Procure as fotos que deseja usar na internet e faça o download no seu computador.
2. Mova todas as fotos baixadas para dentro da pasta **`imagens/`**.
3. Nomes sugeridos para as imagens:
   - `favicon.png` (Ícone pequeno que aparece na aba do navegador)
   - `logo-apae.png` (Logo da APAE)
   - `banner-principal.jpg` (Foto grande do topo)
   - `artes.jpg`, `psicomotricidade.jpg`, `inclusao-digital.jpg` (Atividades)
   - **Fotos da Galeria (você pode ter várias de cada tema):**
     - `educacao-1.jpg`, `educacao-2.jpg`
     - `esportes-1.jpg`, `esportes-2.jpg`
     - `eventos-1.jpg`, `eventos-2.jpg`
     - `oficinas-1.jpg`, `oficinas-2.jpg`
     - `projetos-1.jpg`, `projetos-2.jpg`


**Dica:** Pode baixar uma imagem pequena (ou o próprio símbolo da APAE/florzinha) no formato PNG ou ICO e salvá-la dentro da pasta imagens/ com o nome favicon.png.

**Dica para adicionar mais fotos em qualquer categoria:**
No arquivo `index.html`, basta copiar e colar o bloco abaixo dentro da categoria que quiser:
```html
<div class="item-galeria">
    <img src="imagens/nome-da-sua-foto.jpg" alt="Descrição da foto" class="foto-clicavel">
</div>

*Nota: Se você salvar uma foto com outro nome ou formato (por exemplo, `.png`), basta alterar o texto correspondente dentro do arquivo `index.html` no campo `src="imagens/nome-da-sua-foto.png"`.*

---

## Como Editar os Textos no VSCode

1. Abra a pasta do projeto no VSCode: vá em **File (Arquivo) > Open Folder (Abrir Pasta)** e selecione a pasta do site.
2. Abra o arquivo **`index.html`**.
3. Procure pelas mensagens de comentário escritas em letras maiúsculas, como:
   - `<!-- EDITE O TÍTULO E O TEXTO DO BANNER AQUI -->`
   - `<!-- EDITE A MISSÃO ABAIXO -->`
   - `<!-- COLOQUE A FOTO DA ATIVIDADE 1 ABAIXO -->`
4. Escreva ou altere os textos logo abaixo dessas instruções, mantendo as tags HTML (como `<p>`, `<h3>`, `<h2>`) no lugar.
5. Quando terminar de editar, salve as alterações pressionando o atalho **`Ctrl + S`**.

---

## Como Executar e Ver o Resultado no Navegador

Para visualizar o site funcionando sem precisar instalar nenhuma extensão:

1. **Localize o arquivo:**
   - Abra a pasta do projeto no Explorador de Arquivos do Windows.
2. **Abra o site:**
   - Dê dois cliques rápidos no arquivo **`index.html`**. Ele será aberto automaticamente no seu navegador (Google Chrome, Edge, etc.).
3. **Atualize para ver as mudanças:**
   - Sempre que você alterar um texto ou foto no VSCode e salvar com `Ctrl + S`, vá até a janela do navegador e aperte a tecla **`F5`** (ou clique no botão de recarregar a página) para conferir as novidades.

---

## Dica: Como Testar a Responsividade (Visualizar como Celular)

Você pode conferir como o site se adapta a telas de smartphones e tablets diretamente pelo navegador:

1. Com o site aberto no Google Chrome ou Edge, aperte a tecla **`F12`** no teclado (ou clique com o botão direito do mouse em qualquer parte da página e selecione **Inspecionar**).
2. Na barra superior da janela de ferramentas que abrir, clique no ícone de **celular/tablet** (atalho: **`Ctrl + Shift + M`**).
3. A tela mostrará o formato de um celular. Você pode rolar a página para conferir se todos os títulos, textos e fotos continuam alinhados e confortáveis para leitura.
4. Para voltar à exibição normal de computador, basta fechar o painel de inspeção no **X** ou apertar **`F12`** novamente.