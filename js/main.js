/**
 * BRACIS 2026 v4 - Clean Interactions
 * Essential JS for standard navigation and basic sliders.
 */

const translations = {
    pt: {
        "nav.about": "Sobre",
        "nav.colocated": "Eventos Satélites",
        "nav.location": "Cuiabá",
        "nav.sponsors": "Patrocinadores",
        "nav.register": "Inscrever-se",
        "hero.subtitle": "36º Conferência Brasileira de Sistemas Inteligentes",
        "hero.location": "Centro de Eventos do SENAI<br>Cuiabá, MT, Brasil",
        "hero.explore": "Explore Mais",
        "about.title": "A Porta de Entrada para a Inovação em IA",
        "about.p1": "Bem-vindo à 36ª Conferência Brasileira de Sistemas Inteligentes. O BRACIS é um dos eventos mais importantes do Brasil para pesquisadores e profissionais de Inteligência Artificial e Computacional.",
        "about.p2": "Estamos entusiasmados em reunir a comunidade de IA e Inteligência Computacional mais uma vez para compartilhar conhecimento, descobrir novas tendências e promover parcerias institucionais e tecnológicas.",
        "events.title": "Eventos Satélites",
        "events.eniac": "Encontro Nacional de Inteligência Artificial e Computacional",
        "events.stil": "Simpósio Brasileiro de Tecnologia da Informação e da Linguagem Humana",
        "events.kdmile": "Simpósio de Descoberta de Conhecimento, Mineração e Aprendizado",
        "events.wesaac": "Workshop-Escola sobre Agentes, Ambientes e Aplicações",
        "events.ctdiac": "15º Concurso Nacional de Teses e Dissertações em IA e Computacional",
        "location.title": "Venha conhecer Cuiabá Mato Grosso",
        "location.p1": "Descubra uma região onde a modernidade de Cuiabá se encontra com a exuberância natural de Mato Grosso. Um destino surpreendente que combina clima tropical, infraestrutura para grandes eventos e uma hospitalidade incomparável.",
        "location.p2": "Aproveite também para estender sua visita e vivenciar destinos internacionalmente cobiçados, como as belezas místicas da Chapada dos Guimarães e os safáris inesquecíveis no majestoso Pantanal.",
        "location.btn": "Conhecer Mais",
        "modal.title": "Descubra Mato Grosso e Cuiabá",
        "modal.cuiaba.title": "Cuiabá: A Capital Calorosa",
        "modal.cuiaba.p1": "Fundada em 1719, Cuiabá é famosa por seu clima quente e pela imensa hospitalidade de seu povo. Conhecida carinhosamente como \"Cidade Verde\" devido à sua rica arborização nativa, a capital mato-grossense é um caldeirão cultural vibrante que mistura intensas influências indígenas, africanas, europeias e de migrantes de todas as regiões do Brasil.",
        "modal.cuiaba.p2": "<strong>Pontos Turísticos & Gastronomia:</strong> O Centro Histórico preserva lindos casarões coloniais. O Parque Mãe Bonifácia e o Parque das Águas são perfeitos para caminhadas no fim de tarde. A culinária local é absolutamente imperdível, com destaque unânime para os pratos à base de peixes dos ricos rios da região — como o cobiçado pintado e o pacu — além da tradicional Farofa de Banana e da icônica Maria Isabel.",
        "modal.mt.title": "Mato Grosso: Natureza Exuberante",
        "modal.mt.p1": "O estado de Mato Grosso é um privilégio geográfico global, sendo o único estado do Brasil a abrigar simultaneamente três dos principais biomas do país: o Pantanal, a Floresta Amazônica e o Cerrado. Essa diversidade fantástica resulta em cenários e paisagens de tirar o fôlego e uma biodiversidade praticamente inigualável.",
        "modal.mt.p2": "<strong>Belezas Naturais Próximas:</strong> A apenas 60 km do centro de Cuiabá localiza-se a <strong>Chapada dos Guimarães</strong>, um paraíso místico com seus paredões gigantescos de rocha avermelhada, dezenas de cachoeiras e mirantes impressionantes. O grandioso <strong>Pantanal</strong>, a maior planície inundável do planeta, oferece uma experiência de imersão e safáris fotográficos inesquecíveis. Mais ao norte, a incrível região de <strong>Nobres e Bom Jardim</strong> impressiona com suas nascentes de águas extremamente cristalinas, ideais para flutuação lado a lado com peixes coloridos.",
        "sponsors.title": "Organizado Por",
        "sponsors.promo": "Promoção",
        "sponsors.support2": "Apoio Institucional",
        "footer.date": "19 a 22 de Outubro, 2026",
        "footer.instagram": "Siga o BRACIS no Instagram ↗",
        "footer.rights": "&copy; 2026 BRACIS. Todos os direitos reservados.",
        "footer.dev": "Desenvolvido com ❤️ na UFMT"
    },
    en: {
        "nav.about": "About",
        "nav.colocated": "Co-located Events",
        "nav.location": "Cuiabá",
        "nav.sponsors": "Sponsors",
        "nav.register": "Register",
        "hero.subtitle": "36th Brazilian Conference on Intelligent Systems",
        "hero.location": "SENAI Event Center<br>Cuiabá, MT, Brazil",
        "hero.explore": "Explore More",
        "about.title": "The Gateway to AI Innovation",
        "about.p1": "Welcome to the 36th Brazilian Conference on Intelligent Systems. BRACIS is one of the most important events in Brazil for researchers and practitioners in Artificial and Computational Intelligence.",
        "about.p2": "We are thrilled to bring the AI and Computational Intelligence community together once again to share knowledge, discover new trends, and foster institutional and technological partnerships.",
        "events.title": "Co-located Events",
        "events.eniac": "National Meeting on Artificial and Computational Intelligence",
        "events.stil": "Brazilian Symposium on Information and Human Language Technology",
        "events.kdmile": "Symposium on Knowledge, Discovery, Mining and Learning",
        "events.wesaac": "Workshop-School on Agents, Environments, and Applications",
        "events.ctdiac": "15th National Contest of PhD and MSc Theses on AI and Computational Intelligence",
        "location.title": "Come discover Cuiabá Mato Grosso",
        "location.p1": "Discover a region where the modernity of Cuiabá meets the natural exuberance of Mato Grosso. A surprising destination that combines a tropical climate, infrastructure for large events, and unparalleled hospitality.",
        "location.p2": "Take the opportunity to extend your visit and experience internationally coveted destinations, such as the mystical beauties of Chapada dos Guimarães and unforgettable safaris in the majestic Pantanal.",
        "location.btn": "Learn More",
        "modal.title": "Discover Mato Grosso & Cuiabá",
        "modal.cuiaba.title": "Cuiabá: The Warm Capital",
        "modal.cuiaba.p1": "Founded in 1719, Cuiabá is famous for its warm climate and the immense hospitality of its people. Affectionately known as the \"Green City\" due to its rich native afforestation, the capital of Mato Grosso is a vibrant cultural melting pot that mixes intense indigenous, African, European and migrant influences from all regions of Brazil.",
        "modal.cuiaba.p2": "<strong>Tourist Spots & Gastronomy:</strong> The Historic Center preserves beautiful colonial mansions. The Mãe Bonifácia Park and Parque das Águas are perfect for late afternoon walks. The local cuisine is absolutely unmissable, with unanimous prominence for dishes based on fish from the region's rich rivers — such as the coveted pintado and pacu — in addition to the traditional Banana Farofa and the iconic Maria Isabel.",
        "modal.mt.title": "Mato Grosso: Exuberant Nature",
        "modal.mt.p1": "The state of Mato Grosso is a global geographical privilege, being the only state in Brazil to simultaneously shelter three of the country's main biomes: the Pantanal, the Amazon Forest and the Cerrado. This fantastic diversity results in breathtaking scenery and virtually unrivaled biodiversity.",
        "modal.mt.p2": "<strong>Nearby Natural Beauties:</strong> Just 60 km from the center of Cuiabá is <strong>Chapada dos Guimarães</strong>, a mystical paradise with its giant red rock walls, dozens of waterfalls and impressive viewpoints. The grandiose <strong>Pantanal</strong>, the largest floodplain on the planet, offers an unforgettable immersion and photographic safari experience. Further north, the incredible region of <strong>Nobres and Bom Jardim</strong> impresses with its extremely crystal clear water springs, ideal for floating side by side with colorful fish.",
        "sponsors.title": "Organized By",
        "sponsors.promo": "Promotion",
        "sponsors.support2": "Institutional Support",
        "footer.date": "October 19 - 22, 2026",
        "footer.instagram": "Follow BRACIS on Instagram ↗",
        "footer.rights": "&copy; 2026 BRACIS. All rights reserved.",
        "footer.dev": "Developed with ❤️ at UFMT"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navigation Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const isDisplayed = navLinks.style.display === 'flex';
            navLinks.style.display = isDisplayed ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '2rem 0';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
    }

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset calculation for sticky header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // 4. Language Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    const htmlLang = document.documentElement;

    function setLanguage(lang) {
        htmlLang.lang = lang === 'pt' ? 'pt-BR' : 'en';

        // Update active button state
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.currentTarget.dataset.lang);
        });
    });

    // 5. Very Simple Auto Slider for Location section
    const sliderImages = document.querySelectorAll('.slider-img');
    const sliderDots = document.querySelectorAll('.slider-dot');

    if (sliderImages.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000;

        function changeSlide(index) {
            sliderImages.forEach(img => img.classList.remove('active'));
            sliderDots.forEach(dot => dot.classList.remove('active'));

            currentSlide = index;
            sliderImages[currentSlide].classList.add('active');
            sliderDots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % sliderImages.length;
            changeSlide(nextIndex);
        }

        let sliderTimer = setInterval(nextSlide, slideInterval);

        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(sliderTimer);
                changeSlide(index);
                sliderTimer = setInterval(nextSlide, slideInterval);
            });
        });
    }



});
