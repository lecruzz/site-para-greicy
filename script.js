// Contador de tempo juntos
document.addEventListener('DOMContentLoaded', function() {
    // Data de início do relacionamento: 7 de abril de 2025
    const dataInicio = new Date('2025-04-07T00:00:00');
    
    function atualizarContador() {
        const agora = new Date();
        const diferenca = agora - dataInicio;
        
        // Cálculo do tempo
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        // Atualização dos elementos
        document.getElementById('dias').textContent = dias;
        document.getElementById('horas').textContent = horas;
        document.getElementById('minutos').textContent = minutos;
        document.getElementById('segundos').textContent = segundos;
    }
    
    // Atualizar a cada segundo
    setInterval(atualizarContador, 1000);
    atualizarContador(); // Chamada inicial
    
    // Animação de entrada para as seções
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Aplicar estilo inicial
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
    });
    
    // Verificar no carregamento e no scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Chamada inicial
    
    // Efeito de partículas de corações
    function criarCoracoes() {
        const container = document.querySelector('.container');
        const coracao = document.createElement('div');
        
        coracao.classList.add('coracao-flutuante');
        coracao.innerHTML = '❤️';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.animationDuration = Math.random() * 3 + 2 + 's';
        coracao.style.opacity = Math.random() * 0.5 + 0.3;
        coracao.style.fontSize = Math.random() * 15 + 10 + 'px';
        
        container.appendChild(coracao);
        
        // Remover após a animação
        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }
    
    // Criar corações a cada 300ms
    setInterval(criarCoracoes, 300);
    
    // Adicionar estilos CSS para os corações flutuantes
    const style = document.createElement('style');
    style.innerHTML = `
        .coracao-flutuante {
            position: fixed;
            top: -10vh;
            user-select: none;
            pointer-events: none;
            z-index: 999;
            animation: flutuar-coracao 5s linear forwards;
        }
        
        @keyframes flutuar-coracao {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: var(--opacity);
            }
            90% {
                opacity: var(--opacity);
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Efeito de brilho nas rosas
    const rosas = document.querySelectorAll('.rosa');
    
    function adicionarBrilho() {
        rosas.forEach((rosa, index) => {
            setTimeout(() => {
                rosa.style.filter = 'drop-shadow(0 0 10px rgba(233, 30, 99, 0.7))';
                
                setTimeout(() => {
                    rosa.style.filter = 'none';
                }, 1000);
            }, index * 500);
        });
    }
    
    // Adicionar brilho a cada 5 segundos
    setInterval(adicionarBrilho, 5000);
    
    // Mensagens românticas aleatórias
    const mensagens = [
        "Cada momento contigo é um tesouro que guardo no coração.",
        "Teu sorriso ilumina meus dias como o sol da manhã.",
        "Encontrar-te foi o melhor presente que a vida me deu.",
        "Contigo, até os momentos simples se tornam extraordinários.",
        "Teu amor me faz querer ser uma pessoa melhor a cada dia."
    ];
    
    const mensagemElement = document.querySelector('.mensagem-final');
    let mensagemIndex = 0;
    
    function trocarMensagem() {
        mensagemElement.style.opacity = '0';
        
        setTimeout(() => {
            mensagemIndex = (mensagemIndex + 1) % mensagens.length;
            mensagemElement.textContent = mensagens[mensagemIndex];
            mensagemElement.style.opacity = '1';
        }, 1000);
    }
    
    // Estilo de transição para a mensagem
    mensagemElement.style.transition = 'opacity 1s ease';
    
    // Trocar mensagem a cada 10 segundos
    setInterval(trocarMensagem, 10000);
});

// Efeito de transformação da árvore em rosa mais elaborado
document.addEventListener('DOMContentLoaded', function() {
    const arvore = document.querySelector('.arvore');
    
    // Adicionar classe para iniciar animação após carregamento
    setTimeout(() => {
        arvore.classList.add('animado');
    }, 1000);
    
    // Adicionar efeito de partículas quando a árvore se transforma
    function adicionarParticulas() {
        const arvoreContainer = document.querySelector('.arvore-container');
        
        for (let i = 0; i < 20; i++) {
            const particula = document.createElement('div');
            particula.classList.add('particula');
            
            particula.style.left = Math.random() * 200 + 'px';
            particula.style.top = Math.random() * 300 + 'px';
            particula.style.animationDelay = Math.random() * 2 + 's';
            
            arvoreContainer.appendChild(particula);
            
            // Remover após a animação
            setTimeout(() => {
                particula.remove();
            }, 3000);
        }
    }
    
    // Adicionar partículas a cada 10 segundos (sincronizado com a transformação)
    setInterval(adicionarParticulas, 10000);
    
    // Adicionar estilos CSS para as partículas
    const style = document.createElement('style');
    style.innerHTML = `
        .particula {
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: #e91e63;
            border-radius: 50%;
            opacity: 0;
            animation: particula-animacao 3s ease-out forwards;
        }
        
        @keyframes particula-animacao {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: scale(1.5) translateY(-100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
