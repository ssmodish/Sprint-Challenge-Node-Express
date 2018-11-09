const express = require('express');


const actionModel = require('../data/helpers/actionModel.js');
const projectModel = require('../data/helpers/projectModel.js');


const server = express();


server.use(express.json());

// GET /projectModel
server.get('/projects', (req, res) => {
  projectModel.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// GET /projectModel/:id
server.get('/projects/:id', (req, res) => {
  projectModel.get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// POST /projectModel
server.post('/projects', (req, res) => {
  const { name, description } = req.body;
  const newProject = { name, description };

  if(!newProject){
    res
      .status(400)
      .json({ errorMessage: "Ya gotta give me something here" });
  } else {
    projectModel.insert(newProject)
      .then(newProjectRes => {
        res.status(201).json({ "posted": newProjectRes });
      })
      .catch(err => {
        res.send(err);
      });
  };
});

// PUT /projectModel/:id
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const updatedProject = req.body;

  projectModel.update(id, updatedProject)
    .then(updateProject => {
      res.status(201).json({ "Project Updated": updateProject });
    })
    .catch(err => {
      res.send(err);
    });
})


// DELETE /projectModel/:id


// GET /projectActions/:id
server.get('/projectActions/:id', (req, res) => {
  projectModel.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// GET /actionModel
server.get('/actions', (req, res) => {
  actionModel.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// GET /actionModel/:id
server.get('/actions/:id', (req, res) => {
  actionModel.get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// POST /actionModel
server.post('/actions', (req, res) => {
  const { project_id, description, notes } = req.body;
  const newAction = { project_id, description, notes };

  if(!newAction){
    res
      .status(400)
      .json({ errorMessage: "Ya gotta give me something here" });
  } else {
    actionModel.insert(newAction)
      .then(newActionRes => {
        res.status(201).json({ "post": "New Action Added!" });
      })
      .catch(err => {
        res.send(err);
      });
  };
});

// PUT /actionModel/:id
server.put('/actions/:id', (req, res) => {
  const { id } = req.params;
  const updatedAction = req.body;

  actionModel.update(id, updatedAction)
    .then(updateAction => {
      res.status(201).json({ "Project Updated": updateAction });
    })
    .catch(err => {
      res.send(err);
    });
})

// DELETE /actionModel/:id


module.exports = server;