const mongoose = require('mongoose');
const settingsSchema = new mongoose.Schema({
 earthMode:{type:String,default:'3D'}, mapStyle:{type:String,default:'satellite'},
 weatherLayer:{type:String,default:'none'}, weatherOpacity:{type:Number,min:0,max:1,default:0.72},
 selectedAircraft:{type:String,default:'a320-s7'}, departure:{name:String,lat:Number,lon:Number}, destination:{name:String,lat:Number,lon:Number}
},{_id:false});
const userSchema = new mongoose.Schema({
 nickname:{type:String,required:true,trim:true,minlength:2,maxlength:24},
 email:{type:String,required:true,unique:true,lowercase:true,trim:true},
 passwordHash:{type:String,required:true}, avatar:{type:String,default:''},
 role:{type:String,enum:['pilot','admin'],default:'pilot'}, settings:{type:settingsSchema,default:()=>({})}
},{timestamps:true});
const messageSchema = new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},nickname:String,
 role:{type:String,enum:['user','assistant'],default:'user'},kind:{type:String,enum:['text','image','voice'],default:'text'},
 content:{type:String,required:true,maxlength:12000},imageUrl:String
},{timestamps:true});
module.exports={User:mongoose.models.User||mongoose.model('User',userSchema),Message:mongoose.models.Message||mongoose.model('Message',messageSchema)};
