import mongoose,{Schema,Document, mongo} from "mongoose";

export interface Message extends Document{
    content : string;
    createdAt : Date
}

const MessageSchema : Schema<Message> = new Schema ({

    content :{
        type : String,
        required : true
    }
    ,
    createdAt :{
        type : Date,
        required : true,
        default : Date.now
    }

})


export interface User extends Document{
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : Boolean;
    isAcceptingMessage : boolean;
    message : Message[]
}
const UserSchema : Schema<User> = new Schema ({
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    }
    ,
    email:{
        type : String,
        required : true,
        unique : true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please use a valid email address'],
    }
    ,
    password :{
        type : String,
        required : true,
    }
    ,
    verifyCode:{
        type : String,
        required : true
    }
    ,
    verifyCodeExpiry:{
        type : Date,
        required : true,

    }
    ,
    isVerified :{
        type : Boolean,
        required : true
    }
    ,
    isAcceptingMessage:{
        type : Boolean,
        required : true,
        default : true
    }
    ,
    message : [MessageSchema]
})

const userModel = (mongoose.models.User as mongoose.Model<User>)|| (mongoose.model<User>("User",UserSchema))

export default userModel
