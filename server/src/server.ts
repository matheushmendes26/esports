import express from 'express'
//ECMA Script modules

const app = express()

app.get('/ads', (request, response)=>{
  return response.json([
    {id: 1, name: 'Anuncio'},
    {id: 2, name: 'Anuncio2'},
    {id: 3, name: 'Anuncio3'}
  ])
})

app.listen(3333)