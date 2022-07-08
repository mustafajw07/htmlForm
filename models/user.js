import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name : {
    firstName : {type : String},
    middleName : {type : String},
    lastName : {type : String},
  },
  email : {
    email1 : {type : String},
    email2 : {type : String},
    email3 : {type : String},
    email4 : {type : String},
    email5 : {type : String},
  },
  number : {
    number1 : {type : Number},
    number2 : {type : Number},
    number3 : {type : Number},
    number4 : {type : Number},
    number5 : {type : Number},
  }
});


const User = mongoose.model('User', userSchema);
export default User;