// Proxy público para evitar CORS y Hotlinking en entornos estáticos (GitHub Pages)
    const PUBLIC_PROXY = "https://api.allorigins.win/raw?url=";
    const ORIGIN_URL = "https://www.pathologylive.com/practicas-organografia-microscopica/bandejas/files/";

    // Usamos el listado completo de imágenes
    const DATA = [
        // Aparato Circulatorio
        {"file": "01VHE.jpg", "name": "Ventrículo", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "02VHE.jpg", "name": "Ventrículo", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "03VHE.jpg", "name": "Ventrículo", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "05VHE.jpg", "name": "Ventrículo - Miocardio", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "06VHE.jpg", "name": "Ventrículo - Miocitos cardíacos", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "01AHHE.jpg", "name": "Aurícula", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "02AHHE.jpg", "name": "Aurícula", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "03AHHE.jpg", "name": "Aurícula", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "01VCPTAH.jpg", "name": "Válvula cardíaca", "cat": "Aparato Circulatorio", "tec": "PTAH"},
        {"file": "02VCPTAH.jpg", "name": "Válvula cardíaca", "cat": "Aparato Circulatorio", "tec": "PTAH"},
        {"file": "01AEHE.jpg", "name": "Arteria elástica", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "02AEHE.jpg", "name": "Arteria elástica", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "01AEG.jpg", "name": "Arteria elástica", "cat": "Aparato Circulatorio", "tec": "Gallego"},
        {"file": "01AMHE.jpg", "name": "Arteria muscular", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "02AMHE.jpg", "name": "Arteria muscular", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "01VGHE.jpg", "name": "Vena grande", "cat": "Aparato Circulatorio", "tec": "HE"},
        {"file": "01VPHE.jpg", "name": "Vasos pequeños", "cat": "Aparato Circulatorio", "tec": "HE"},

        // Órganos Linfoides
        {"file": "01OLGLHE.jpg", "name": "Ganglio linfático", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "02OLGLHE.jpg", "name": "Ganglio linfático", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "03OLGLHE.jpg", "name": "Ganglio linfático - Folículos", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "04OLGLHE.jpg", "name": "Ganglio linfático - Corteza", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "05OLGLHE.jpg", "name": "Ganglio linfático - Centro germinativo", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "01OLBHE.jpg", "name": "Bazo", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "02OLBHE.jpg", "name": "Bazo", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "03OLBHE.jpg", "name": "Bazo - Pulpa blanca", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "01OLTHE.jpg", "name": "Timo", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "02OLTHE.jpg", "name": "Timo", "cat": "Órganos Linfoides", "tec": "HE"},
        {"file": "03OLTHE.jpg", "name": "Timo - Corteza y médula", "cat": "Órganos Linfoides", "tec": "HE"},

        // Aparato Respiratorio  
        {"file": "01ARMOHE.jpg", "name": "Mucosa olfatoria", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "02ARMOHE.jpg", "name": "Mucosa olfatoria", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "01ARAFHE.jpg", "name": "Amígdala faríngea", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "02ARAFHE.jpg", "name": "Amígdala faríngea", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "01ARTHE.jpg", "name": "Tráquea", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "01ARPDHE.jpg", "name": "Pulmón Distendido", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "06ARPDHE.jpg", "name": "Pulmón Distendido", "cat": "Aparato Respiratorio", "tec": "HE"},
        {"file": "04ARPCHE.jpg", "name": "Pulmón Colapsado", "cat": "Aparato Respiratorio", "tec": "HE"},
        
        // Sistema Endocrino
        {"file": "01SEHHE.jpg", "name": "Hipófisis", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "02SEHHE.jpg", "name": "Hipófisis - Adenohipófisis", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "03SEHHE.jpg", "name": "Hipófisis - Neurohipófisis", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "01SETHE.jpg", "name": "Tiroides", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "03SESHE.jpg", "name": "Suprarrenal", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "03SEPIHE.jpg", "name": "Glándula Pineal", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "04SEPIHE.jpg", "name": "Glándula Pineal", "cat": "Sistema Endocrino", "tec": "HE"},
        {"file": "02SETHE.jpg", "name": "Tiroides - Folículos", "cat": "Sistema Endocrino", "tec": "HE"},
        
        
        // Piel
        {"file": "01PGHE.jpg", "name": "Piel gruesa", "cat": "Piel", "tec": "HE"},
        {"file": "02PGHE.jpg", "name": "Piel gruesa - Estratos", "cat": "Piel", "tec": "HE"},
        {"file": "01PUHE.jpg", "name": "Uña", "cat": "Piel", "tec": "HE"},
        {"file": "03PPHE.jpg", "name": "Pelo", "cat": "Piel", "tec": "HE"},
        {"file": "01PMHE.jpg", "name": "Glándula mamaria", "cat": "Piel", "tec": "HE"},
        {"file": "02PMHE.jpg", "name": "Glándula mamaria - Lactante", "cat": "Piel", "tec": "HE"},
        
        // Digestivo
        {"file": "03ADBEHE.jpg", "name": "Encía", "cat": "Digestivo - Boca", "tec": "HE"},
        {"file": "03ADBLPTAH.jpg", "name": "Lengua", "cat": "Digestivo - Boca", "tec": "HE"},
        {"file": "03ADBPHE.jpg", "name": "Glándula Parótida", "cat": "Digestivo - Boca", "tec": "HE"},
        {"file": "03ADBMHE.jpg", "name": "Molar", "cat": "Digestivo - Boca", "tec": "HE"},
        {"file": "04ADTELHE.jpg", "name": "Esófago Longitudinal", "cat": "Digestivo - Tubo", "tec": "HE"},
        {"file": "04ADTSCHE.jpg", "name": "Estómago", "cat": "Digestivo - Tubo", "tec": "HE"},
        {"file": "01ADIDHE.jpg", "name": "Intestino delgado - Duodeno", "cat": "Digestivo - Tubo", "tec": "HE"},
        {"file": "05ADTYCHE.jpg", "name": "Yeyuno Transversal", "cat": "Digestivo - Tubo", "tec": "HE"},
        {"file": "04ADTITHE.jpg", "name": "Íleon Transversal", "cat": "Digestivo - Tubo", "tec": "HE"},
        {"file": "04ADTAHE.jpg", "name": "Apéndice", "cat": "Digestivo - Tubo", "tec": "HE"},
        
        // Urinario
        {"file": "05UVRHE.jpg", "name": "Vejiga - Relajada", "cat": "Aparato Urinario", "tec": "HE"},
        {"file": "03UVDHE.jpg", "name": "Vejiga - Distendida", "cat": "Aparato Urinario", "tec": "HE"},
        {"file": "03UUHE.jpg", "name": "Uréter", "cat": "Aparato Urinario", "tec": "HE"},
        {"file": "03URPHE.jpg", "name": "Riñón - Perfusión", "cat": "Aparato Urinario", "tec": "HE"},
        {"file": "03URIHE.jpg", "name": "Riñón - Inmersión", "cat": "Aparato Urinario", "tec": "HE"},
        
        // Genital
        {"file": "04GMCDHE.jpg", "name": "Conducto deferente", "cat": "Genital Masculino", "tec": "HE"},
        {"file": "03GMTHHE.jpg", "name": "Testículo", "cat": "Genital Masculino", "tec": "HE"},
        {"file": "03GMTEHE.jpg", "name": "Testículo Espermatogénesis", "cat": "Genital Masculino", "tec": "HE"},
        {"file": "01GMPHE.jpg", "name": "Próstata", "cat": "Genital Masculino", "tec": "HE"},
        {"file": "01GMVSHE.jpg", "name": "Vesícula seminal", "cat": "Genital Masculino", "tec": "HE"},
        {"file": "01GFUHE.jpg", "name": "Útero - Endometrio", "cat": "Genital Femenino", "tec": "HE"},
        {"file": "02GFUHE.jpg", "name": "Útero - Miometrio", "cat": "Genital Femenino", "tec": "HE"},
        {"file": "01GFVHE.jpg", "name": "Vagina", "cat": "Genital Femenino", "tec": "HE"},
        {"file": "03GFPHE.jpg", "name": "Placenta", "cat": "Genital Femenino", "tec": "HE"},
        {"file": "04GFOFHE.jpg", "name": "Ovario fértil", "cat": "Genital Femenino", "tec": "HE"},
        {"file": "03GFTFHE.jpg", "name": "Tompra uterina", "cat": "Genital Femenino", "tec": "HE"},
        
        // Nervioso
        {"file": "04ONCHE.jpg", "name": "Cerebelo", "cat": "Sistema Nervioso", "tec": "HE"},
        {"file": "01ONBHE.jpg", "name": "Cerebro", "cat": "Sistema Nervioso", "tec": "HE"},
        {"file": "06ONBHE.jpg", "name": "Cerebro", "cat": "Sistema Nervioso", "tec": "HE"},
        {"file": "01ONMHE.jpg", "name": "Médula espinal", "cat": "Sistema Nervioso", "tec": "HE"},
        {"file": "02ONMHE.jpg", "name": "Médula espinal - Asta anterior", "cat": "Sistema Nervioso", "tec": "HE"},
        {"file": "01ONGRHE.jpg", "name": "Ganglio raquídeo", "cat": "Sistema Nervioso", "tec": "HE"},
        {"file": "01ONGVHE.jpg", "name": "Ganglio vegetativo", "cat": "Sistema Nervioso", "tec": "HE"},
        
        // Sentidos
        {"file": "01OSOCHE.jpg", "name": "Ojo - Retina", "cat": "Órganos de los Sentidos", "tec": "HE"},
        {"file": "04OSGHE.jpg", "name": "Ojo - Córnea", "cat": "Órganos de los Sentidos", "tec": "HE"},
        {"file": "03OSCHE.jpg", "name": "Cristalino", "cat": "Órganos de los Sentidos", "tec": "HE"},
        {"file": "08OSOHE.jpg", "name": "Oído Interno", "cat": "Órganos de los Sentidos", "tec": "HE"},
        {"file": "01OGLHE.jpg", "name": "Glándula lacrimal", "cat": "Órganos de los Sentidos", "tec": "HE"}
    ];
    

    let stats = { c: 0, w: 0, r: 0 };
    let currentPool = [];
    let currentIndex = 0;
    let loadedCount = 0;

    // --- REFERENCIAS Y POBLACIÓN DE FILTROS ---
    const filter = document.getElementById('categoryFilter');

    // Llenar Filtro de Sistemas
    [...new Set(DATA.map(d => d.cat))].sort().forEach(c => {
        let o = document.createElement('option'); o.value = c; o.innerText = c; filter.appendChild(o);
    });

    function resetAndLoad() {
        const cat = filter.value;
        // Filtramos solo por sistema
        currentPool = cat === 'all' ? [...DATA] : DATA.filter(d => d.cat === cat);
        
        // Mezclamos el mazo
        currentPool.sort(() => Math.random() - 0.5);
        currentIndex = 0;
        displayCard();
    }

    function displayCard() {
        document.getElementById('innerCard').classList.remove('flipped');
        const imgElement = document.getElementById('mainImg');
        imgElement.style.opacity = "0.3";

        const card = currentPool[currentIndex];
        imgElement.src = "";
        // 3. CAMBIO CLAVE: Usar la ruta de tu servidor propio en Render
        // const newSrc = `/api/proxy-image?file=${card.file}`;

        imgElement.src = "img/" + card.file + "?v=" + new Date().getTime();
        imgElement.style.opacity = "1";
        
        imgElement.onload = () => imgElement.style.opacity = "1";
        imgElement.onerror = () => {
            console.error("No se encontró el archivo en la carpeta img/:", card.file);
        };

        document.getElementById('organName').innerText = card.name;
        document.getElementById('categoryName').innerText = card.cat;
        document.getElementById('techName').innerText = "Técnica: " + card.tec;
    }

    function nextCard() {
        if (currentPool.length === 0) return;
        // El operador % hace que el mazo sea circular e infinito
        currentIndex = (currentIndex + 1) % currentPool.length;
        displayCard();
    }

    function prevCard() {
        if (currentPool.length === 0) return;
        currentIndex = (currentIndex - 1 + currentPool.length) % currentPool.length;
        displayCard();
    }

    function submitResult(isCorrect) {
        if(isCorrect) { stats.c++; stats.r++; } 
        else { stats.w++; stats.r = 0; }
        updateStatsUI();
        nextCard();
    }

    function updateStatsUI() {
        const total = stats.c + stats.w;
        document.getElementById('s-c').innerText = stats.c;
        document.getElementById('s-w').innerText = stats.w;
        document.getElementById('s-r').innerText = stats.r;
        document.getElementById('s-p').innerText = total === 0 ? "0%" : Math.round((stats.c / total) * 100) + "%";
    }

    // Carga inicial
window.onload = () => {
    resetAndLoad();
};