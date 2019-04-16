
/*
* this function delete the field contain null value
* */
export const trimObject = function (o){
  let _o = Object.assign(o);
  for(let key in _o){
    if(_o[key] == null){
      delete  _o[key];
    }
  }
  console.log('_o:', _o);
  return _o;
}
