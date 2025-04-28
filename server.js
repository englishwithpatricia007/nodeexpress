import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = [];


app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
}
);

app.post('/usuarios', (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body);
});

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})


/*
Criar nossa API de usuários

1) Criar um servidor HTTP com Express   
2) Criar uma rota GET /usuarios que retorne um JSON com a mensagem "GET /usuarios"
3) Criar uma rota GET /usuarios que retorne um texto "GET /usuarios"

4) Criar um usuário
5) Criar um usuário com o método POST /usuarios que retorne um JSON com a mensagem "POST /usuarios"

6) Listar todos os usuários com o método GET /usuarios que retorne um JSON com a mensagem "GET /usuarios"
7) Listar um usuário com o método GET /usuarios/:id que retorne um JSON com a mensagem "GET /usuarios/:id"

8) Editar um usuário com o método PUT /usuarios/:id que retorne um JSON com a mensagem "PUT /usuarios/:id"
9) Deletar um usuário com o método DELETE /usuarios/:id que retorne um JSON com a mensagem "DELETE /usuarios/:id"
*/


/*
1) método HTTP: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
2) URL: /api/v1/usuarios
*/

// Dados sensíveis: senhas, tokens, dados pessoais Body Params
// Dados não sensíveis: nome, email, telefone, endereço Query Params / Route Params

//HTTP Status Codes
// 200 - OK
// 201 - Created   
// 204 - No Content

//2XX - Sucesso
//3XX - Redirecionamento
//4XX - Erro do cliente
//5XX - Erro do servidor