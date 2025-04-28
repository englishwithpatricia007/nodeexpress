import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors('http://localhost:5173'));


app.post('/usuarios', async (req, res) => {
    await prisma.user.create ({
        data: {
            name: req.body.name,
            email: req.body.email,        
        }
    })    
    res.status(201).json(req.body);
});

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users);
}); 


app.put('/usuarios/:id', async (req, res) => {
   await prisma.user.update ({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,        
        }
    })    
    res.status(201).json(req.body);
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete ({
         where: {
             id: req.params.id
         }
     })    
     res.status(200).json({message: 'Usuario deletado com sucesso!'});
 });


app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})


//1) método HTTP: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
//2) URL: /api/v1/usuarios


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