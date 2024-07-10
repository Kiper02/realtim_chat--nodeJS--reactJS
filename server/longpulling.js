import express from 'express'
import cors from 'cors'
import events from 'events'

const PORT = 5000;

const emmiter = new events.EventEmitter()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/get-messages', (req, res) => {
    const listener = (message) => {
        res.json(message);
        emmiter.removeListener('newMessage', listener); 
    };
    emmiter.on('newMessage', listener);
});


app.post('/new-messages', (req, res) => {
    const message = req.body; 
    emmiter.emit('newMessage', message);
    res.sendStatus(200); 
});


app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`)
})