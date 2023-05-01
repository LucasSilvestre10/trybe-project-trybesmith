import usersModel from '../models/usersModel';
import auth from '../utils/auth';

const postUsers = async (
  username: string, 
  vocation: string, 
  level: number, 
  password:string,
): Promise<string> => {
  const user = {
    username, 
    vocation, 
    level, 
    password,
  };
  const userID = await usersModel.postUsers(user);
  const token = auth.genToken(user.username, userID);
   
  return token;
};

export default { postUsers };