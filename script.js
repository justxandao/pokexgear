function updateRotatingImages() {
    const dukeImages = [
        { src: 'assets/duke/domingo-pewter.png', text: '30304, 20351, 5' },
        { src: 'assets/duke/segunda-lavender.png', text: '30838, 20439, 5' },
        { src: 'assets/duke/terça-cerulean.png', text: '30569, 20236, 5' },
        { src: 'assets/duke/quarta-fuchsia.png', text: '30750, 20727, 5' },
        { src: 'assets/duke/quinta-cinnabar.png', text: '30309, 20707, 5' },
        { src: 'assets/duke/sexta-viridian.png', text: '30250, 20506, 5' },
        { src: 'assets/duke/sabado-pallet.png', text: '30304, 20629, 5' }
    ];

    const bossLinks = [
        'https://wiki.pokexgames.com/index.php/Boss_Fight_-_Raikou',
        'https://wiki.pokexgames.com/index.php/Boss_Fight_-_Suicune',
        'https://wiki.pokexgames.com/index.php/Boss_Fight_-_Entei'
    ];

    const bossImages = [
        { src: 'assets/boss/Card_Boss-Fight-Raikou.png' },
        { src: 'assets/boss/Card_Boss-Fight-Suicune.png' },
        { src: 'assets/boss/Card_Boss-Fight-Entei.png' }
    ];

    const merchantImages = [
        { src: 'assets/merchant/Card_Merchant-Cerulean.png', text: '30619, 20291, 4' },
        { src: 'assets/merchant/Card_Merchant-Pewter.png', text: '30336, 20329, 5' },
        { src: 'assets/merchant/Card_Merchant-Viridian.png', text: '30306, 20536, 5' },
        { src: 'assets/merchant/Card_Merchant-Fuchsia.png', text: '30697, 20761, 5' },
        { src: 'assets/merchant/Card_Merchant-Cinnabar.png', text: '30357, 20690, 5' },
        { src: 'assets/merchant/Card_Merchant-Pallet.png', text: '30295, 20617, 5' },
        { src: 'assets/merchant/Card_Merchant-Lavender.png', text: '30830, 20468, 5' }
    ];

    const dzImages = [
        { src: 'assets/dz/Card_DZ_Primeira-Semana.png', text: 'Mega Slowbro, Emolga, Haxorus, Conkeldurr' },
        { src: 'assets/dz/Card_DZ_Segunda-Semana.png', text: 'Drapion, Breloom, Shiny Glaceon' },
        { src: 'assets/dz/Card_DZ_Terceira-Semana.png', text: 'Lickilicky, Heatmor, Mega Altaria, Mega Steelix' },
        { src: 'assets/dz/Card_DZ_Quarta-Semana.png', text: 'Mega Slowbro, Emolga, Haxorus, Drapion, Breloom, Lickilicky, Heatmor, Mega Altaria, Mega Steelix, Conkeldurr, Shiny Glaceon' },
        { src: 'assets/dz/Card_DZ_Quinta-Semana.png', text: 'Zebstrika, Ambipom, Giant Galvantula' },
        { src: 'assets/dz/Card_DZ_Sexta-Semana.png', text: 'Ferrothorn, Chandelure, Shiny Leafeon' },
        { src: 'assets/dz/Card_DZ_Setima-Semana.png', text: 'Galvantula, Probopass, Shiny Manectric, Heatran' },
        { src: 'assets/dz/Card_DZ_Oitava-Semana.png', text: 'Zebstrika, Ambipom, Ferrothorn, Chandelure, Galvantula, Probopass, Shiny Manectric, Heatran, Giant Galvantula, Shiny Leafeon' },
        { src: 'assets/dz/Card_DZ_Nona-Semana.png', text: 'Hippowdon, Bisharp, Shiny Bronzong' },
        { src: 'assets/dz/Card_DZ_Decima-Semana.png', text: 'Cradily, Excadrill, Shiny Sylveon' },
        { src: 'assets/dz/Card_DZ_Decima-Primeira-Semana.png', text: 'Darmanitan, Crustle, Mega Absol' },
        { src: 'assets/dz/Card_DZ_Decima-Segunda-Semana.png', text: 'Hippowdon, Bisharp, Cradily, Excadrill, Darmanitan, Crustle, Mega Absol, Shiny Bronzong, Shiny Sylveon' }
    ];

    const today = new Date();
    const dayOfWeek = today.getDay(); // Retorna o dia da semana (0 = Domingo, 1 = Segunda, etc.)

    // Atualiza a imagem "The Duke" e o texto do tooltip de acordo com o dia da semana
    const dukeImage = document.getElementById('the-duke');
    const dukeTooltipText = document.getElementById('duke-tooltip-text');
    if (dukeImage && dukeTooltipText) {
        dukeImage.src = dukeImages[dayOfWeek].src;
        dukeTooltipText.textContent = dukeImages[dayOfWeek].text;
    }

    // Atualiza a imagem do Boss Card e redireciona para o link correspondente
    const weekNumber = Math.floor(today.getDate() / 7) % bossImages.length;
    const bossCard = document.getElementById('boss-card');
    if (bossCard) {
        bossCard.src = bossImages[weekNumber].src;

        // Faz o redirecionamento ao clicar no boss card
        const wikiButton = document.querySelector('.wiki-button');
        if (wikiButton) {
            wikiButton.addEventListener('click', function () {
                window.open(bossLinks[weekNumber]);
            });
        }
    }

    // Atualiza a imagem do Merchant Card e o texto do tooltip (baseado no dia da semana)
    const merchantCard = document.getElementById('merchant-card');
    const merchantTooltipText = document.getElementById('merchant-tooltip-text');
    if (merchantCard && merchantTooltipText) {
        merchantCard.src = merchantImages[dayOfWeek].src;
        merchantTooltipText.textContent = merchantImages[dayOfWeek].text;
    }

    // Lógica para atualizar a Dimensional Zone às sextas-feiras
    function getDZWeekIndex() {
        const startDate = new Date('2024-09-13'); // Primeira sexta-feira
        const today = new Date();

        // Calcula a diferença em dias entre hoje e a data inicial
        const diffInDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

        // Calcula o número de semanas
        const dzWeekIndex = Math.floor(diffInDays / 7) % dzImages.length;

        return dzWeekIndex;
    }

    const dzCard = document.getElementById('dz-card');
    const dzTooltipText = document.getElementById('dz-tooltip-text');

    if (dzCard && dzTooltipText) {
        const dzWeekIndex = getDZWeekIndex();
        dzCard.src = dzImages[dzWeekIndex].src;
        dzTooltipText.textContent = dzImages[dzWeekIndex].text;
    }
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado: ' + text);
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

// Executa ao carregar a página e verifica a hora
document.addEventListener('DOMContentLoaded', () => {
    updateRotatingImages();

    // Verifica a cada minuto para ver se já são 7h40
    setInterval(() => {
        const now = new Date();
        if (now.getHours() === 7 && now.getMinutes() === 40) {
            updateRotatingImages();
        }
    }, 60000);
});

function redirectToWiki(cardType) {
    let url;
    switch(cardType) {
        case 'boss':
            const weekNumber = Math.floor(new Date().getDate() / 7) % 3;
            url = bossLinks[weekNumber];
            break;
        case 'dz':
            url = 'https://wiki.pokexgames.com/index.php/Rota%C3%A7%C3%A3o_Dimensional_Zone';
            break;
        case 'merchant':
            url = 'https://wiki.pokexgames.com/index.php/Merchant';
            break;
        case 'duke':
            url = 'https://wiki.pokexgames.com/index.php/The_Duke';
            break;
        default:
            url = 'https://wiki.pokexgames.com/';
    }
    window.open(url, '_blank');
}