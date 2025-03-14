  // ================================
    // BARRA DE PROGRESSO DO SCROLL
    // ================================
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scrollProgress').style.width = scrolled + '%';
    });

    // ================================
    // ANIMAÇÃO SEQUENCIAL DOS CARDS
    // ================================
    document.querySelectorAll('.social-card').forEach((card, index) => {
      const delay = 0.2 + index * 0.15;
      card.style.animationDelay = `${delay}s`;
    });

    // ================================
    // ANIMAÇÃO DE APARIÇÃO DO BODY
    // ================================
    window.addEventListener('load', () => {
      document.body.style.opacity = '1';
      document.body.style.transform = 'translateY(0)';
      // Carrega o tema (dark/light) que está no localStorage
      loadTheme();
      // Inicia a animação de texto
      typeWriterEffect();
    });

    // ================================
    // MODAL DA FOTO DE PERFIL
    // ================================
    const profilePic = document.getElementById('profilePic');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');

    profilePic.addEventListener('click', () => {
      modalOverlay.classList.add('active');
    });
    closeModal.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });

    // ================================
    // EFEITO "MÁQUINA DE ESCREVER" + "BOLHA"
    // ================================
    const typedTitleEl = document.getElementById('typedTitle');

    function typeWriterEffect() {
      /*
        Passos:
        1) Digita "Gabriel Inojosa"
        2) Apaga 2 letras ("sa"), ficando "Gabriel Inojo"
        3) Digita "za", virando "Gabriel Inojoza"
        4) Mantém "Gabriel Inojoza"
        5) Aparece "</ " e " >" com efeito de bolha
      */

      const textFull = "Gabriel Inojosa";
      const correction = "za";
      let currentText = "";
      let index = 0;

      const typingSpeed = 150;    // Velocidade ao digitar
      const backspaceSpeed = 90;  // Velocidade ao apagar
      const pauseBeforeBackspace = 600;  // Pausa antes de começar a apagar
      const pauseAfterCorrection = 500;  // Pausa antes de inserir os "<" e ">"

      // 1) Digitar "Gabriel Inojosa"
      const typeInterval = setInterval(() => {
        currentText += textFull[index];
        typedTitleEl.innerHTML = currentText;
        index++;

        if (index === textFull.length) {
          clearInterval(typeInterval);
          // Espera e começa a apagar
          setTimeout(backspaceAction, pauseBeforeBackspace);
        }
      }, typingSpeed);

      // 2) Apagar 2 letras => "sa"
      function backspaceAction() {
        let backspaceCount = 2; // apaga 2 caracteres
        const backspaceInterval = setInterval(() => {
          if (backspaceCount > 0) {
            // Remove o último caractere
            currentText = currentText.slice(0, -1);
            typedTitleEl.innerHTML = currentText;
            backspaceCount--;
          } else {
            clearInterval(backspaceInterval);
            // 3) Digitar "za"
            typeCorrection();
          }
        }, backspaceSpeed);
      }

      // 3) Digitar "za"
      function typeCorrection() {
        let correctionIndex = 0;
        const correctionInterval = setInterval(() => {
          currentText += correction[correctionIndex];
          typedTitleEl.innerHTML = currentText;
          correctionIndex++;

          if (correctionIndex === correction.length) {
            clearInterval(correctionInterval);
            // Espera e finaliza com símbolos
            setTimeout(insertAngleBrackets, pauseAfterCorrection);
          }
        }, typingSpeed);
      }

      // 4) Aparecem "</ " e " >" com efeito “bolha”
      function insertAngleBrackets() {
        // Remove o cursor do typewriter
        typedTitleEl.style.borderRight = "none";

        // Reescreve o texto final (garantia)
        typedTitleEl.textContent = currentText;

        // Cria brackets com animação bubblePop
        const leftBracket = document.createElement('span');
        leftBracket.classList.add('bubble-bracket', 'left-bracket');
        leftBracket.textContent = '</ ';

        const rightBracket = document.createElement('span');
        rightBracket.classList.add('bubble-bracket', 'right-bracket');
        rightBracket.textContent = ' >';

        // Insere no DOM
        typedTitleEl.prepend(leftBracket);
        typedTitleEl.appendChild(rightBracket);
      }
    }

    // ================================
    // TOGGLE DE TEMA (DARK/LIGHT)
    // ================================
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleIcon = document.getElementById('themeToggleIcon');
    let isDarkMode = false;

    function loadTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        isDarkMode = true;
        // Altera ícone para sol
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
      }
    }

    function toggleTheme() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
      }
    }

    themeToggle.addEventListener('click', toggleTheme);

    // ================================
    // CONFIGURAÇÃO DO PARTICLES.JS
    // ================================
    // Exemplifica partículas mais dinâmicas (múltiplas cores, efeitos de bubble e grab)
     window.addEventListener('load', () => {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          /* Aumentamos a quantidade para dar mais “densidade” */
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 900
          }
        },
        "color": {
          "value": ["#00ff7f", "#00ffff"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          /* Mantemos variação aleatória (valores até ~0.7) */
          "value": 0.7,
          "random": true
        },
        "size": {
          /* Ligeiramente maior e também randômico */
          "value": 3.5,
          "random": true
        },
        "line_linked": {
          "enable": true,
          /* Um pouco mais de distância para variar a rede */
          "distance": 140,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          /* Velocidade um pouco maior e randomização de direção */
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          /* Mescla “grab” e “bubble” ao hover */
          "onhover": {
            "enable": true,
            "mode": ["grab", "bubble"]
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 150,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            /* Aumentamos um pouco o size e distance */
            "distance": 160,
            "size": 6,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            /* Maior distância de repulsão ao clicar */
            "distance": 200,
            "duration": 0.4
          }
        }
      },
      "retina_detect": true
    });
  });