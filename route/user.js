import express from 'express';
import validate from '../Middleware/validate';
import userController from '../controllers/users';


const user = express.Router();
// get the list of users
user.get('/users', validate, userController.getAllUsers);
// getting details of one user
user.get('/users/:id', validate, userController.getUser);
// add a new user
user.post('/auth/signup', userController.signUp);
// authenicating users login
user.post('/auth/login', userController.logIn);
// updating user info
user.put('/users/:id', validate, userController.editUserInfo);
// deleting a user
user.delete('/users/:id', validate, userController.deleteUser);

export default user;
