import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
       type:Schema.Types.ObjectId, // one who is subscribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId, // one who channel is  subcribed by 'subscriber'
         ref:"User"
    }

},{timestamps:true})

const Subscription = mongoose.model("Subscription", subscriptionSchema )