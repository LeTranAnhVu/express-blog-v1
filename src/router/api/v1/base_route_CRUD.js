
export default class baseRoute {
  constructor (ctrl) {
    this._ctrl = ctrl;
  };
  all(req, res, next){
    this._ctrl.getAll().then(items=>{
      res.status(200).json({data: items});
    }).catch(err=>{
      next({status: 500, message: 'server error', error: err});
    })
  };
  single (req, res, next){
    const id = req.params.id;
    this._ctrl.getOneById(id).then(item=>{
      res.status(200).json({data: item});
    }).catch(err=>{
      next({status: 404, message: 'resource not found', error: err});
    })
  };
  update(req, res, next){
    if(req.body && req.body.data){
      this._ctrl.edit(req.params.id, req.body.data)
      .then(newData =>{
        res.status(200).json({data: newData})
      }).catch(err=>{
        next({status: 500, message: 'Server error', error: err});
      })
    }else {
      next({status: 404, message: 'Invalid data'})
    }
  }
  create (req, res, next){
    // if(req.body.data && req.body.data.name){
    //   const _dummy = {
    //     name: req.body.data.name,
    //     status: req.body.data.status ? req.body.data.status: false,
    //   };
    //   this._ctrl.create(_dummy).then(newItem=>{
    //     res.status(200).json(newItem);
    //   }).catch(err=>{
    //     next({status: 500, message: 'Cannot create data', error: err})
    //   })
    // }else {
    //   next({status: 404, message: 'Invalid data'})
    // }

  };
  delete(req, res, next){
    if(req.body && req.body.ids && req.body.ids.length !== 0){
      this._ctrl.delete(req.body.ids)
      .then(()=>{
        res.status(200).json({status: 200, message: 'Delete successfully'})
      }).catch(err=>{
        next({status: 404, message: 'Invalid Id', error: err});
      })
    }else {
      next({status: 404, message: 'Id should be pass as array'});
    }
  }
}
