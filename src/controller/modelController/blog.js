import Blog from '../../model/blog';
import Base from './base_CRUD';

class BlogCtrl extends Base{
  constructor (model){
    super(model);
  }
}
const blogCtrl = new BlogCtrl(Blog);
export default blogCtrl;
