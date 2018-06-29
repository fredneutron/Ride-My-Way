import express from 'express';
import validate from '../Middleware/validate';
import userController from '../controllers/users';


const user = express.Router();
// get the list of user
user.get('/', userController.homepage);
user.get('/users', validate, userController.getAllUsers);
user.get('/users/:id', userController.getUser);
// add a user
user.post('/users', userController.addNewUser);
user.post('/authusers', userController.authUser);
// update a user
user.put('/users/:id', validate, userController.editUserInfo);
// delete a user
user.delete('/users/:id', validate, userController.deleteUser);

export default user;
