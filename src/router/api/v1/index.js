import express from 'express';
import users from './users';
import blogs from './blogs';
const v1 = express.Router();

v1.use('/users', users);
v1.use('/blogs', blogs);

export default v1;
