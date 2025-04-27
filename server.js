import e from "express";

const users = [];
const app = e();

app.post('/usuarios', (req, res) => {
    console.log(req)
    res.json({ message: 'POST /usuarios' });
});
app.get('/usuarios', (req, res) => {   
    
    res.json({ message: 'GET /usuariosyyyyy' });
});

app.get('/usuarios', (req, res) => {
    res.send('GET /usuariosxxxx')
}
);

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