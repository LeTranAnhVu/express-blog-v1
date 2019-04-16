import { trimObject } from '../../helpers'

export default class BaseCURD {
  constructor (model) {
    this.model = model;
  }

  getAll () {
    return new Promise((resolve, reject) => {
      this.model.find({}, (err, items) => {
        err ? reject(err) : resolve(items)
      })
    })
  };

  getOneById (id) {
    return new Promise((resolve, reject) => {
      this.model.findById(id, (err, item) => {
        err ? reject(err) : resolve(item)
      })
    })
  };

  create (data) {
    return new Promise((resolve, reject) => {
      let _data = trimObject(data);
      let todo = new this.model(data)
      todo.save((err, item) => { err ? reject(err) : resolve(item)})
    })
  };

  edit (id, data) {
    const opt = {
      new: true, // return the new updated data instead of the old one in
                 // callback
      useFindAndModify: false,
    }
    return new Promise((resolve, reject) => {
      if (id && data) {
        data.dateUpdated = Date.now()
        this.model.findOneAndUpdate({_id: id}, data, opt,
          (err, updatedData) => {
            err ? reject(err) : resolve(updatedData)
          })
      } else {
        reject({message: 'invalid id or data'})
      }
    })
  };

  /*
  * @params: ids: array of id
  * */
  delete (ids) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(ids) && ids.length != 0) {
        this.model.deleteMany({_id: {$in: ids}}, function (err, result) {
          if (err) {
            reject(err)
          } else {
            if (result.n > 0) {
              // delete successfully
              resolve()
            } else {
              // nothing to delete
              reject({err: 'invalid ids'})
            }
          }
        })
      } else {
        reject({err: 'invalid ids'})
      }

    })
  };
}
