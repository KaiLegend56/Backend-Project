import mongoose,{Schema} from "mongoose";

const likeSchema = new Schema({
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
    likedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    video:
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
    },
    tweet:{
        type:Schema.Types.ObjectId,
        ref:"Tweet"
    }
    
},
{timestamps:true})

//likeSchema.plugin(mongooseAggregatePaginate);

export const Like = mongoose.model("Like",likeSchema)