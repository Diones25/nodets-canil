import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname ,'../public')));

const PORT = process.env.PORT || 4001;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);    
});