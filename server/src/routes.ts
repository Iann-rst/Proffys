import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

/* Rota para criar uma aula */
routes.post('/classes', classesControllers.create);
/* Rota para listar uma aula */
routes.get('/classes', classesControllers.index);

/* Rota para criar conexão do aluno com professor */
routes.post('/connections', connectionsController.create);
/* Rota para mostrar o total de conexões existentes */
routes.get('/connections', connectionsController.index);

export default routes;