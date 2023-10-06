//https://www.youtube.com/watch?v=hHM-hr9q4mo
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

// GET,POST,PUT,DELETE

const database = new DatabaseMemory()

server.post('/videos', (req, res) => {
    database.create({title: 'Video 01', description: 'Esse é o video 01', duration: 180})

    console.log(database.list())

    return res.status(201).send()
})

server.get('/videos', () => {
    return 'Hello Rocketseat'
})

server.put('/videos/:id', () => {
    return 'Hello World'
})

server.delete('/videos:id', () => {
    return 'Hello World'
})
server.listen({port: 3333})
