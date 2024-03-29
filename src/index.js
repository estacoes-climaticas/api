import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import DatabaseConfig from './config/database';
import ControllerConfig from './config/controller';
import AuthConfig from './config/authentication';
// require('dotenv').config();
import dotenv from 'dotenv'

const app = express();

// configurando ambiente
dotenv.config();

// middlewares do express
app.use(cors({ origin: ['http://localhost:3000'] }))
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan('combined'));


// Configurações de rotas
ControllerConfig.config(app);

// Configurações do db
DatabaseConfig.config()
// require('mongoose').Promise = global.Promise

// Configurações de autenticação
AuthConfig.config();

// Iniciando o servidor
const porta = process.env.PORT || 3001
app.listen(porta, () => console.log(`Servidor iniciado na porta ${porta}`))
