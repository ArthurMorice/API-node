const express = require("express");
const port = 3000;
const app = express();

  app.post('/tasks', (req, res) => {
    res.json({ message: 'Ressource créée' });

    const{title} = req.body;
    if(!title){
        return res.status(403).json({message: 'Le titre est requis'})
    }
    const newTask = {
        id,
        titre: title,
        status: false,
    }
    tasks.push(newTask);
    res.send(201).json(newTask);
    
  });
  app.get('/tasks', (req, res) => {
    return res.status(200).json(tasks);

  });
/*ID ++   */




  app.put('/tasks:id', (req, res) => {
    
  });
  app.delete('/tasks:id', (req, res) => {
    
  });




app.listen(port, () => {
  console.log(`app ici ---> http://localhost:${port} <---`);
});