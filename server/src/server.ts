import express from 'express'
//ECMA Script modules

const app = express()

//HTTP METHODS / API RESTFUL

//GET, POST, PUT, PATCH, DELETE

app.get('/games', (request, response)=>{
  return response.json([

  ]);
} );

app.post('/ads', (request,  response)=>{
  return response.status(201).json([
    
  ]);
} );

app.get('games/:id/ads', (request, response)=>{
  return response.json([
    {id: 1, name: 'Anuncio'},
    {id: 2, name: 'Anuncio2'},
    {id: 3, name: 'Anuncio3'}
  ])
})

app.get('ads/:id/discord', (request, response)=>{
  return response.json([])
})

app.listen(3333)