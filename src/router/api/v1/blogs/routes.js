import baseRoute from '../base_route_CRUD'



export default  class Routes extends baseRoute{
  constructor (ctrl){
    super(ctrl);
  }
  create(req, res, next){
    if(req.body.data){
      console.log('co data');
      let _dummy = {
        title: req.body.data.title ? req.body.data.title: null,
        content: req.body.data.content ? req.body.data.content: null,
        author: req.body.data.author ? req.body.data.author: null,
      };
      this._ctrl.create(_dummy).then(newItem=>{
        res.status(200).json(newItem);
      }).catch(err=>{
        next({status: 500, message: 'Cannot create data', error: err})
      })
    }else {
      next({status: 404, message: 'Invalid data'})
    }
  }
}
