import express from 'express';
import { homepage, getAllUsers, getUser, addNewUser, authUser, editUserInfo, deleteUser} from '../controllers/users';


const user = express.Router();
// get the list of user
user.get('/', homepage);
user.get('/users', getAllUsers);
user.get('/users/:id', getUser);
// add a user
user.post('/users', addNewUser);
user.post('/authusers', authUser);
// update a user
user.put('/users/:id', editUserInfo);
// delete a user
user.delete('/users/:id', deleteUser);

export default user;
