const express = require('express');
const app= express();
const {findUsers}= require('./users.js')

app.get('/', (req, res)=>{
    res.send(`<h1>Página Home</h1>
    <a href="/marketing">Marketing</a>
    <a href="/developers">Developers</a>
    <a href="/QAs">QAs</a>
    <a href="/ventas">Ventas</a>
    <a href="/contacto">Contacto</a>
    `);
})

app.get('/marketing', (req, res)=>{
    const users = findUsers('marketing')
    res.send(users);
})

app.get('/developers', (req, res)=>{
    const users = findUsers('developers')
    res.send(users);
})
app.get('/ventas', (req, res)=>{
    const users = findUsers('ventas')
    res.send(users);
})
app.get('/QAs', (req, res)=>{
    const users = findUsers('QAs')
    res.send(users);
})

app.use((req, res)=>{
    res.status(404).send('<h2>Página no encontrada</h2> <a href="/">Home</a>');
})


app.listen(3000, ()=>{
    console.log('puerto http://localhost:3000');
})