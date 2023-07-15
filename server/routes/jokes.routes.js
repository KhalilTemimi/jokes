const JokeController = require('../controllers/jokes.controller');
 
module.exports = app => {
    console.log("here we are")
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}