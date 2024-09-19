Description
Cette API permet de gérer une liste de tâches, avec la possibilité de les créer, modifier, supprimer, et consulter leur statut. Le tout est implémenté avec Express.js et expose plusieurs routes HTTP pour interagir avec les tâches.

Routes et Fonctionnalités

1. Récupérer toutes les tâches
Route : GET /tasks
Description : Cette route renvoie la liste de toutes les tâches enregistrées dans le système.
Réponse : Un tableau JSON contenant toutes les tâches sous forme d'objets { id, title, status }.
[
  {
    "id": 1,
    "title": "Tâche exemple",
    "status": true
  }
]

2. Ajouter une nouvelle tâche
Route : POST /tasks
Description : Cette route permet d'ajouter une nouvelle tâche.

Paramètres : Le corps de la requête doit contenir un JSON avec les champs suivants :
title: (obligatoire) Titre de la tâche, doit être une chaîne de caractères.
status: (optionnel) Statut de la tâche (boolean), false par défaut si non fourni.
{
  "title": "Nouvelle tâche",
  "status": false
}

Réponse : Retourne la tâche nouvellement créée avec un ID généré automatiquement.
{
  "id": 2,
  "title": "Nouvelle tâche",
  "status": false
}

3. Modifier une tâche existante (remplacer titre et/ou statut)
Route : PUT /tasks/:id
Description : Cette route permet de modifier complètement une tâche en remplaçant son titre et/ou son statut.

Paramètres : :id : L'ID de la tâche à modifier.
Le corps de la requête doit contenir un JSON avec les champs suivants (optionnels) :
title : Nouveau titre de la tâche (si modifié).
status : Nouveau statut de la tâche (si modifié).
{
  "title": "Titre mis à jour",
  "status": true
}

Réponse : Retourne la tâche modifiée avec les nouvelles valeurs.
{
  "id": 2,
  "title": "Titre mis à jour",
  "status": true
}

4. Modifier le statut d'une tâche
Route : PATCH /tasks/:id/completed
Description : Cette route permet de modifier le statut d'une tâche. Elle inverse le statut actuel de la tâche spécifiée (true devient false, et inversement).

Paramètres : :id : L'ID de la tâche à modifier.
Réponse : Retourne la tâche mise à jour avec son nouveau statut.
{
  "id": 2,
  "title": "Nouvelle tâche",
  "status": true
}

5. Supprimer une tâche
Route : DELETE /tasks/:id
Description : Cette route permet de supprimer une tâche en fonction de son ID.

Paramètres : :id : L'ID de la tâche à supprimer.
Réponse : Retourne la tâche supprimée.
{
  "id": 2,
  "title": "Nouvelle tâche",
  "status": true
}