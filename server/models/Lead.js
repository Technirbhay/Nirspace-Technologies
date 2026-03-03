import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

email:{
type:String,
required:true
},

project:{
type:String,
required:true
},

budget:{
type:String,
required:true
},

status:{
type:String,
enum:["New","Contacted","Closed"],
default:"New"
}

},{
timestamps:true
});

export default mongoose.model("Lead",leadSchema);