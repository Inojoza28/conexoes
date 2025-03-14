# Hub de Conexões | Gabriel Inojoza

Este projeto é um **hub pessoal** que centraliza meus links e informações profissionais e criativas. Nele você encontra:

- **Animação interativa de partículas** com efeitos dinâmicos e tecnológicos (usando Particles.js);
- **Efeito de máquina de escrever** para a exibição do nome, seguido por uma "onda verde" que realça cada caractere;
- **Modo Dark/Light** com persistência via `localStorage` e um elegante botão de toggle;
- Layout **minimalista** e **responsivo** com cards para redes sociais e um modal para ampliar a foto de perfil.

## Funcionalidades

- **Animação de Partículas:**  
  O fundo do header apresenta partículas animadas que se conectam por linhas sutis, com opacidade e movimento dinâmico. Inicialmente, as partículas aparecem discretamente e, após a conclusão da animação do texto, tornam-se mais visíveis para dar um toque tecnológico.

- **Efeito Typewriter com Onda Verde:**  
  O nome "Gabriel Inojosa" é digitado com um efeito de máquina de escrever. Em seguida, ocorre uma correção ("sa" é apagado e "za" é digitado) e, ao finalizar, são adicionados os símbolos `</` e `>`. Cada caractere passa por uma breve alteração de cor (onda verde) antes de voltar à cor padrão.

- **Modo Dark/Light:**  
  Um botão de toggle permite alternar entre os temas escuro e claro. O estado escolhido é salvo no `localStorage`, garantindo que o usuário mantenha sua preferência ao recarregar a página.

- **Layout Responsivo:**  
  O design se adapta a diferentes tamanhos de tela, com animação de entrada dos elementos (cards e seções), criando uma experiência de usuário agradável e fluida.

- **Modal para Foto de Perfil:**  
  Ao clicar na foto de perfil, um modal é exibido com uma versão ampliada da imagem, permitindo uma visualização detalhada.

## Pré-requisitos

- Navegador moderno com suporte a HTML5, CSS3 e JavaScript.
- Conexão com a internet para carregar as fontes do Google, o Font Awesome e o Particles.js via CDN.

## Instalação e Uso

1. **Clone ou Baixe o Projeto:**

   ```bash
   git clone https://github.com/inojoza28/conexoes.git
