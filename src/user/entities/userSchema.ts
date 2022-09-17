import { Schema, model } from "mongoose";

export interface UserInput {
    username: string,
    password: string
}

const userschema = new Schema <UserInput>({
    username: {
        type: String,
        required: true, 
      },
      password: {
        type: String,
        required: true
      }
});

const UserModel = model<UserInput>('User', userschema)

export default UserModel;