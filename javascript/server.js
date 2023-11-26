const express = require('express');
const path = require('path'); 
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'school'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});


app.use(express.static(path.join(__dirname, 'javascript')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/app.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
