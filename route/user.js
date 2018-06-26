import express from 'express';
import UsersController from '../controllers/users';


const user = express.Router();
// get the list of user
user.get('/users', UsersController.get_all_users);
user.get('/getusers/:id', UsersController.get_user);
// add a user
user.post('/users', UsersController.add_new_user);
user.post('/authusers', UsersController.authuser);
// update a user
user.put('/users/:id', UsersController.edit_user_info);
// delete a user
user.delete('/users/:id', UsersController.delete_user);

export default user;
