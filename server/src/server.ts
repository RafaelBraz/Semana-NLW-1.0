import express from 'express';

const app = express()

app.get('/user', (request, response) => {
    console.log('Listagem de usuários');
    
    response.json([
        'Rafael',
        'Cleiton',
        'Diego',
        'Judite',
    ]);
});

app.listen(3333);
