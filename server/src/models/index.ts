
import {sequelize} from '../config/connection.js'
import { LoginFactory } from './login.js';

const Login = LoginFactory(sequelize);

export { Login };
