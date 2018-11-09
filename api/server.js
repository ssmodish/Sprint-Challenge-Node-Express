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

// PUT /projectModel/:id

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

// PUT /actionModel/:id

// DELETE /actionModel/:id


module.exports = server;