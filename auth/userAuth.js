import { fetchData } from '../controllers/recipeController';
import data from '../data/user.json'
const login = (user, pass) => {
    return data.users.some(element => element.username === user && element.password === pass);
}
export { login };