const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Structure de données pour stocker les tâches
let tasks = [];
let nextId = 1;

// Routes

// 1. Récupérer toutes les tâches
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// 3. Ajouter une nouvelle tâche
app.post('/tasks', (req, res) => {
  const { title, status } = req.body;

  // Validation : Vérifier que 'title' est une chaîne de caractères
 // if (typeof title !== 'string') {
    //return res.status(400).json({ message: 'Données invalides : Le titre doit être une chaîne de caractères' });
  //}

  // Si 'status' n'est pas fourni, attribuer false par défaut
  const newTask = {
    id: nextId++,  // L'ID est automatiquement généré
    title,
    status: status !== undefined ? status : false  // Valeur par défaut pour status
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 4. Modifier une tâche existante
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, status } = req.body;
  const task = tasks.find(t => t.id === id);
  if (task) {
    if (title !== undefined) task.title = title;
    if (status !== undefined) task.status = status;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Tâche non trouvée' });
  }
});

// 5. Supprimer une tâche
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ message: 'Tâche non trouvée' });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API de gestion des tâches en écoute sur http://localhost:${port}`);
});