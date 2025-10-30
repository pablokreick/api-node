import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const characters = [
  { id: 1, name: 'Rick Sanchez', species: 'Human', status: 'Alive', image: 'https://api-node-production-08b0.up.railway.app/morty.jpeg' },
  { id: 2, name: 'Morty Smith', species: 'Human', status: 'Alive', image: 'https://api-node-production-08b0.up.railway.app/morty.jpeg' },
  { id: 3, name: 'Birdperson', species: 'Bird-Person', status: 'Dead', image: 'https://api-node-production-08b0.up.railway.app/morty.jpeg' },
  { id: 4, name: 'Mr. Meeseeks', species: 'Meeseeks', status: 'Unknown', image: 'https://api-node-production-08b0.up.railway.app/morty.jpeg' }
];


app.use('/images', express.static('public/images'));

app.get('/character', (req, res) => {
    const {name} = req.query
    let result = characters;
    if (name) {
        result = characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase()))
    }
  res.json(result);
});

app.get('/character/:id', (req, res)=> {
   const id = parseInt(req.params.id);
    const character = characters.find((c)=> c.id === Number(id))

    if(!character) return res.status(404).json({error: 'Character not found'})

    res.json(character)
})

app.get('/', (req, res) => {
  res.send('API de personajes lista para usar 🚀');
});

app.listen(PORT);