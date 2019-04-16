import express from 'express'
import blogCtrl from '../../../../controller/modelController/blog'
import Routes from './routes';
const Router = express.Router()
const routes = new Routes(blogCtrl)

Router.get('/', routes.all.bind(routes))
Router.post('/create', routes.create.bind(routes))
Router.get('/:id', routes.single.bind(routes))
Router.put('/update', routes.update.bind(routes))
Router.delete('/delete', routes.delete.bind(routes))

export default Router
