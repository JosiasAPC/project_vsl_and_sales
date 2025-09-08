# 📖 Manual de Edição da Página VSL

Olá! 👋  
Este guia foi criado para te ajudar a editar os textos, imagens e o vídeo da sua página VSL.  
Não é necessário nenhum conhecimento avançado, basta seguir os passos abaixo.

---

## 🖼️ Alterar Imagens

1. Todas as imagens estão na pasta:
   assets/images/

2. Basta **substituir a imagem existente** por outra com o mesmo nome para atualizar automaticamente no site.
   **Ter atenção em detalhes como tipo (webp e tamanho) para manter desempenho.**
   As imagens mobile estão separadas em uma subpasta mobile\_-_images

- Exemplo: Se você trocar `logo.jpg` por um novo arquivo chamado `logo.jpg`, o site mostrará a nova logo.

3. Se quiser usar outro nome para a imagem:

- Abra o arquivo `index.html`
- Procure pelo trecho que usa essa imagem, por exemplo:

  ```html
  <picture>
    <!-- Imagem para telas até 768px (mobile) -->
    <source
      srcset="assets/images/mobile_images/Logo-mobile.webp"
      media="(max-width: 768px)"
    />

    <!-- Imagem para telas maiores (desktop/web) -->
    <source srcset="assets/images/Logo.webp" media="(min-width: 769px)" />

    <!-- Fallback caso o navegador não suporte <picture> -->
    <img
      importance="high"
      src="assets/images/Logo.webp"
      alt="Logo"
      loading="eager"
    />
  </picture>
  ```

- Troque apenas o nome do arquivo (src: `"nova-logo.webp"`).

---

## ✍️ Alterar Textos

1. Todos os textos ficam dentro do arquivo index.html.

2. Abra o arquivo com o Bloco de Notas (Windows) ou TextEdit (Mac).

3. Procure pelo texto que deseja alterar e substitua.

---

## ⚠️ Atenção

- Não altere os nomes das pastas (assets, images, etc).

- Sempre mantenha a extensão correta dos arquivos de imagem (.jpg, .png, .webp).

- Caso algo não funcione, volte a versão original do arquivo e tente novamente.

## ******************************\*\*\*******************************

## Arquivos Minificados (.min)

Arquivos com a extensão .min são versões minificadas de CSS ou JavaScript. Minificação é o processo de remover todos os caracteres desnecessários do código — como espaços, quebras de linha e comentários — sem alterar sua funcionalidade.

## Benefícios de usar arquivos .min:

Carregamento mais rápido: arquivos menores reduzem o tempo de download.

Melhor desempenho: diminui o tempo de bloqueio de renderização e melhora a performance da página.

Produção otimizada: ideal para sites ao vivo, enquanto os arquivos não minificados são mais fáceis de ler e editar durante o desenvolvimento.

## Exemplos neste projeto:

style.min.css – CSS principal minificado.

normalize.min.css – Reset CSS minificado.

script.min.js – JavaScript de animações e interações minificado.

## ******************************\*\*\*******************************

## Como modificar os arquivos CSS ou JavaScript

Se você precisar alterar o estilo ou o comportamento da página, siga estes passos:

1. Edite o arquivo original:

- Para CSS: abra style.css ou normalize.css.

- Para JavaScript: abra script.js (ou outro arquivo principal).

Não edite diretamente os arquivos .min, pois eles são minificados e difíceis de ler.

2. Teste suas alterações:

- Salve o arquivo e abra a página localmente para verificar se as mudanças funcionam corretamente.

3. Minifique o arquivo para produção:

- Use uma ferramenta online como https://www.toptal.com/developers/cssminifier
  para CSS ou https://www.toptal.com/developers/javascript-minifier
  para JavaScript.

- Copie o conteúdo minificado.

4. Substitua o arquivo no projeto:

- Salve o conteúdo minificado como style.min.css ou script.min.js.

- Substitua o arquivo antigo no projeto pelo novo .min.

- Atualize a página para garantir que as alterações estão funcionando em produção.

## Seguindo este fluxo, você mantém o código legível para edição e a versão minificada otimizada para carregamento rápido.
