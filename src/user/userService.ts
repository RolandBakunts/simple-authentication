import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken'
import User, { UserInput } from './entities/userSchema';
import { jwtSecret } from '../config'
import { NotFound, BadRequest, Unauthorized } from "../errors";

export async function signup(input: UserInput) {
    try {
      const { username, password } = input;
      const userExists = await getUser({ username });
      if (userExists) {
        throw new BadRequest("User exists");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return await User.create({username, password: hashedPassword});
    } catch (e: any) {
      throw new Error(e);
    }
  }


  export async function login(input: UserInput) {
    try {
      const { username } = input;
      const user = await getUser({ username });
      if (!user) {
        throw new NotFound("User doesn't exist");
      }
      const validPass = await bcrypt.compare(input.password, user.password);
      if (!validPass) {
        throw new Unauthorized("wrong password");
      }
    
      return jwt.sign({_id: user._id}, jwtSecret!)
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getUser(input: Partial<UserInput>) {
  try {
    const user = await User.findOne( input );
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}
