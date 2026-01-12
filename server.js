const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
// Sirve archivos estáticos (index.html) desde la raíz
app.use(express.static(path.join(__dirname)));

app.get('/api/proxy-image', async (req, res) => {
    const fileName = req.query.file;
    const targetUrl = `https://www.pathologylive.com/practicas-organografia-microscopica/bandejas/files/${fileName}`;

    try {
        const response = await axios({
            url: targetUrl,
            method: 'GET',
            responseType: 'stream',
            timeout: 10000, // Aumentado a 10s para conexiones lentas
            headers: {
                'Referer': 'https://www.pathologylive.com/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache 24h
        response.data.pipe(res);

    } catch (error) {
        console.error(`Error con ${fileName}:`, error.message);
        res.status(404).send('Error al cargar');
    }
});

// Render usa el puerto de la variable de entorno PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));