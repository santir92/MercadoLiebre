// Importación módulos

const express = require('express')
const path = require('path')

// Definición app

const app = express()

// Indicar que la carpeta public es de recursos estáticos

app.use(express.static(path.join(__dirname, '/public')))

// Poner a correr el servidor en el puerto 3000

app.listen(process.env.PORT || 3000, () => {
    console.log('Corriendo')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});